package com.hardwarestore.backend.controllers;

import com.hardwarestore.backend.exception.ResourceNotFoundException;
import com.hardwarestore.backend.models.BlackListJwt;
import com.hardwarestore.backend.models.ERole;
import com.hardwarestore.backend.models.Role;
import com.hardwarestore.backend.models.User;
import com.hardwarestore.backend.payload.request.GoogleRequest;
import com.hardwarestore.backend.payload.request.LoginRequest;
import com.hardwarestore.backend.payload.request.LogoutRequest;
import com.hardwarestore.backend.payload.request.SignupRequest;
import com.hardwarestore.backend.payload.response.JwtResponse;
import com.hardwarestore.backend.payload.response.MessageResponse;
import com.hardwarestore.backend.repository.BlackListJwtRepository;
import com.hardwarestore.backend.repository.RoleRepository;
import com.hardwarestore.backend.repository.UserRepository;
import com.hardwarestore.backend.security.jwt.JwtUtils;
import com.hardwarestore.backend.security.services.UserDetailsImpl;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    private BlackListJwtRepository blackListJwtRepository;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername())
                .orElseThrow(() -> new ResourceNotFoundException("Niepoprawna nazwa użytkownika lub hasło!"));
        if (loginRequest.getPassword().equals("")) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Podaj hasło!"));
        }
        if (!user.getIsAccountNonLocked()) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Twoje konto jest zablokowane!"));
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(),
                roles, userDetails.getName(), userDetails.getSurname(), userDetails.getDateOfBirth(), userDetails.getStreet(),
                userDetails.getHouseNumber(), userDetails.getPostalCode(), userDetails.getCity()));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Nazwa użytkownika jest zajęta!"));
        }
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Ten adres email jest zajęty!"));
        }
        // Create new user's account
        User user = new User(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()), signUpRequest.getName(), signUpRequest.getSurname(),
                signUpRequest.getDateOfBirth(), signUpRequest.getStreet(), signUpRequest.getHouseNumber(),
                signUpRequest.getPostalCode(), signUpRequest.getCity(), true);
        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();
        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Nie znaleziono roli."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Nie znaleziono roli."));
                        roles.add(adminRole);
                        break;
                    case "mod":
                        Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Nie znaleziono roli."));
                        roles.add(modRole);
                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Nie znaleziono roli."));
                        roles.add(userRole);
                }
            });
        }
        user.setRoles(roles);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/logout")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = {@Authorization(value = "jwtToken")})
    public ResponseEntity<Void> logout(@Valid @RequestBody LogoutRequest logoutRequest) {
        BlackListJwt blackListJwt = new BlackListJwt(logoutRequest.getToken());
        blackListJwtRepository.save(blackListJwt);
        return ResponseEntity.ok(null);
    }

    @PostMapping("/google")
    public ResponseEntity<?> google(@Valid @RequestBody GoogleRequest googleRequest) {
        if (googleRequest.getSecret().equals("0rXjNJ0wm31u4zCNGqQnJlchgfbL17Uc")) {
            if (userRepository.existsByEmail(googleRequest.getEmail())) {
                User user = userRepository.findByEmail(googleRequest.getEmail())
                        .orElseThrow(() -> new ResourceNotFoundException("Niepoprawna nazwa użytkownika lub hasło!"));
                if (!user.getIsAccountNonLocked()) {
                    return ResponseEntity
                            .badRequest()
                            .body(new MessageResponse("Twoje konto jest zablokowane!"));
                }
                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(googleRequest.getEmail(), ""));
                SecurityContextHolder.getContext().setAuthentication(authentication);
                String jwt = jwtUtils.generateJwtToken(authentication);

                UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
                List<String> roles = userDetails.getAuthorities().stream()
                        .map(item -> item.getAuthority())
                        .collect(Collectors.toList());
                return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(),
                        roles, userDetails.getName(), userDetails.getSurname(), userDetails.getDateOfBirth(), userDetails.getStreet(),
                        userDetails.getHouseNumber(), userDetails.getPostalCode(), userDetails.getCity()));
            } else {
                // Create new user's account
                User user = new User(googleRequest.getEmail(),
                        googleRequest.getEmail(),
                        encoder.encode(""), googleRequest.getName(), googleRequest.getSurname(),
                        null, "", "",
                        "", "", true);
                Set<String> strRoles = googleRequest.getRole();
                Set<Role> roles = new HashSet<>();
                if (strRoles == null) {
                    Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                            .orElseThrow(() -> new RuntimeException("Nie znaleziono roli."));
                    roles.add(userRole);
                } else {
                    strRoles.forEach(role -> {
                        switch (role) {
                            case "admin":
                                Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                        .orElseThrow(() -> new RuntimeException("Nie znaleziono roli."));
                                roles.add(adminRole);
                                break;
                            case "mod":
                                Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                        .orElseThrow(() -> new RuntimeException("Nie znaleziono roli."));
                                roles.add(modRole);
                                break;
                            default:
                                Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                        .orElseThrow(() -> new RuntimeException("Nie znaleziono roli."));
                                roles.add(userRole);
                        }
                    });
                }
                user.setRoles(roles);
                userRepository.save(user);

                // Login after account creation
                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(googleRequest.getEmail(), ""));
                SecurityContextHolder.getContext().setAuthentication(authentication);
                String jwt = jwtUtils.generateJwtToken(authentication);

                UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
                List<String> _roles = userDetails.getAuthorities().stream()
                        .map(item -> item.getAuthority())
                        .collect(Collectors.toList());
                return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(),
                        _roles, userDetails.getName(), userDetails.getSurname(), userDetails.getDateOfBirth(), userDetails.getStreet(),
                        userDetails.getHouseNumber(), userDetails.getPostalCode(), userDetails.getCity()));
            }
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Próba włamania"));
        }
    }

}
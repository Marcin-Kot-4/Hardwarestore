package com.hardwarestore.backend.controllers;

import com.hardwarestore.backend.exception.ResourceNotFoundException;
import com.hardwarestore.backend.models.Product;
import com.hardwarestore.backend.models.User;
import com.hardwarestore.backend.models.UserProduct;
import com.hardwarestore.backend.repository.ProductRepository;
import com.hardwarestore.backend.repository.UserProductRepository;
import com.hardwarestore.backend.repository.UserRepository;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class CartController {
    @Autowired
    private UserProductRepository userProductRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/cart/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = {@Authorization(value = "jwtToken")})
    public ResponseEntity<List<UserProduct>> getCartByUserId(@PathVariable(value = "userId") Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("Nie znaleziono użytkownika o id = " + userId);
        }
        List<UserProduct> userProduct = userProductRepository.findUserProductByUserId(userId);
        return new ResponseEntity<>(userProduct, HttpStatus.OK);
    }

    @PostMapping("/cart/{userId}/{productId}/{quantity}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = {@Authorization(value = "jwtToken")})
    public ResponseEntity<UserProduct> addToCart(@PathVariable(value = "userId") Long userId,
                                                       @PathVariable(value = "productId") Long productId,
                                                       @PathVariable(value = "quantity") Long quantity) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("Nie znaleziono użytkownika o id = " + userId);
        }
        if (!productRepository.existsById(productId)) {
            throw new ResourceNotFoundException("Nie znaleziono produktu o id = " + productId);
        }

        UserProduct userProduct = userProductRepository.findUserProductByUserIdAndProductId(userId, productId);

        if (userProduct != null) {
            userProduct.setQuantity(userProduct.getQuantity() + quantity);
            userProductRepository.save(userProduct);
            return new ResponseEntity<>(userProduct, HttpStatus.OK);
        } else {
            Product product = productRepository.findById(productId).
                    orElseThrow(() -> new RuntimeException("Nie znaleziono produktu o id: " + productId));
            User user = userRepository.findById(userId).
                    orElseThrow(() -> new RuntimeException("Nie znaleziono użytkownika o id: " + userId));


            userProduct = new UserProduct(user, product, quantity);
            userProductRepository.save(userProduct);
            return new ResponseEntity<>(userProduct, HttpStatus.CREATED);
        }
    }

    @DeleteMapping("cart/{userProductId}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = {@Authorization(value = "jwtToken")})
    public ResponseEntity<HttpStatus> deleteItemFromCart(@PathVariable(value = "userProductId") Long userProductId) {
        userProductRepository.deleteById(userProductId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("cart/deleteAll/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = {@Authorization(value = "jwtToken")})
    @Transactional
    public ResponseEntity<HttpStatus> deleteCart(@PathVariable(value = "userId") Long userId) {
        userProductRepository.deleteAllByUserId(userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

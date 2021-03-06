package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);

    Iterable<User> findByIsAccountNonLocked(Boolean isAccountNonLocked);
}

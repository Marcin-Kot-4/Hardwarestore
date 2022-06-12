package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.ERole;
import com.hardwarestore.backend.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERole name);

}

package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.BlackListJwt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlackListJwtRepository extends JpaRepository<BlackListJwt, Long> {
    Boolean findByToken(String token);
}

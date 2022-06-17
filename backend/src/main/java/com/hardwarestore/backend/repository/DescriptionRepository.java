package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.Description;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DescriptionRepository extends JpaRepository<Description, Long> {
    List<Description> findDescriptionsByProductId(Long productId);
}

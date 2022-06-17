package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findReviewsByProductId(Long productId);
    List<Review> findReviewsByUserId(Long userId);
}

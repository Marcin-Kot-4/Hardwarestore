package com.hardwarestore.backend.controllers;

import com.hardwarestore.backend.exception.ResourceNotFoundException;
import com.hardwarestore.backend.models.Product;
import com.hardwarestore.backend.models.Review;
import com.hardwarestore.backend.models.User;
import com.hardwarestore.backend.repository.ProductRepository;
import com.hardwarestore.backend.repository.ReviewRepository;
import com.hardwarestore.backend.repository.UserRepository;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.TimeZone;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ReviewController {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/reviews/products/{productId}")
    public ResponseEntity<List<Review>> getAllReviewsByProductId(@PathVariable(value = "productId") Long productId) {
        if (!productRepository.existsById(productId)) {
            throw new ResourceNotFoundException("Not found Product with id = " + productId);
        }
        List<Review> reviews = reviewRepository.findReviewsByProductId(productId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @GetMapping("/reviews/users/{userId}")
    public ResponseEntity<List<Review>> getAllReviewsByUserId(@PathVariable(value = "userId") Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("Not found User with id = " + userId);
        }
        List<Review> reviews = reviewRepository.findReviewsByUserId(userId);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @PostMapping("/reviews/{productId}")
    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
    public ResponseEntity<Review> createReview(@PathVariable(value = "productId") Long productId, @RequestBody Review review) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Product with id = " + productId));

        Authentication loggedInUser = SecurityContextHolder.getContext().getAuthentication();
        String username = loggedInUser.getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("Not found User with username = " + username));


        final long timeAtLocal = System.currentTimeMillis();
        final long offset = TimeZone.getDefault().getOffset(timeAtLocal);

        Review _review = reviewRepository.save(new Review(review.getContent(), review.getStars(),
               new Timestamp(timeAtLocal + offset), product, user));
        return new ResponseEntity<>(_review, HttpStatus.CREATED);
    }
}

package com.hardwarestore.backend.controllers;

import com.hardwarestore.backend.exception.ResourceNotFoundException;
import com.hardwarestore.backend.models.Description;
import com.hardwarestore.backend.models.Product;
import com.hardwarestore.backend.repository.DescriptionRepository;
import com.hardwarestore.backend.repository.ProductRepository;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class DescriptionController {
    @Autowired
    private DescriptionRepository descriptionRepository;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/descriptions/{productId}")
    public ResponseEntity<List<Description>> getAllDescriptionsByProductId(@PathVariable(value = "productId") Long productId) {
        if (!productRepository.existsById(productId)) {
            throw new ResourceNotFoundException("Not found Product with id = " + productId);
        }
        List<Description> descriptions = descriptionRepository.findDescriptionsByProductId(productId);
        return new ResponseEntity<>(descriptions, HttpStatus.OK);
    }

    @PostMapping("/descriptions/{productId}")
    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
    public ResponseEntity<Description> createDescription(@PathVariable(value = "productId") Long productId, @RequestBody Description description) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Product with id = " + productId));
        Description _description = descriptionRepository.save(new Description(description.getHeading(), description.getContent(),
                description.getImage(), product));
        return new ResponseEntity<>(_description, HttpStatus.CREATED);
    }

}

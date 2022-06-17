package com.hardwarestore.backend.controllers;

import com.hardwarestore.backend.exception.ResourceNotFoundException;
import com.hardwarestore.backend.models.Product;
import com.hardwarestore.backend.models.SubCategory;
import com.hardwarestore.backend.repository.ProductRepository;
import com.hardwarestore.backend.repository.SubCategoryRepository;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class SubCategoryController {
    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/subCategories")
    public ResponseEntity<List<SubCategory>> getAllSubCategories() {
        List<SubCategory> subCategories = new ArrayList<SubCategory>();
        subCategoryRepository.findAll().forEach(subCategories::add);
        if (subCategories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(subCategories, HttpStatus.OK);
    }

    @GetMapping("/products/{productId}/subCategories")
    public ResponseEntity<List<SubCategory>> getAllSubCategoriesByProductId(@PathVariable(value = "productId") Long productId) {
        if (!productRepository.existsById(productId)) {
            throw new ResourceNotFoundException("Not found Product with id = " + productId);
        }
        List<SubCategory> subCategories = subCategoryRepository.findSubCategoriesByProductsId(productId);
        return new ResponseEntity<>(subCategories, HttpStatus.OK);
    }

    @GetMapping("/subCategories/{id}")
    public ResponseEntity<SubCategory> getSubCategoryById(@PathVariable(value = "id") Long id) {
        SubCategory subCategory = subCategoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found SubCategory with id = " + id));
        return new ResponseEntity<>(subCategory, HttpStatus.OK);
    }

    @GetMapping("/subCategories/{subCategoryId}/products")
    public ResponseEntity<List<Product>> getAllProductsBySubCategoryId(@PathVariable(value = "subCategoryId") Long subCategoryId) {
        if (!subCategoryRepository.existsById(subCategoryId)) {
            throw new ResourceNotFoundException("Not found SubCategory with id = " + subCategoryId);
        }
        List<Product> products = productRepository.findProductsBySubCategoriesId(subCategoryId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("/products/{productId}/subCategory")
    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
    public ResponseEntity<SubCategory> addSubCategoryToProduct(@PathVariable(value = "productId") Long productId, @RequestBody SubCategory subCategoryRequest) {
        SubCategory subCategory = productRepository.findById(productId).map(product -> {
            long subCategoryId = subCategoryRequest.getId();

            // SubCategory exists
            if (subCategoryId != 0L) {
                SubCategory _subCategory = subCategoryRepository.findById(subCategoryId)
                        .orElseThrow(() -> new ResourceNotFoundException("Not found SubCategory with id = " + subCategoryId));
                product.addSubCategory(_subCategory);
                productRepository.save(product);
                return _subCategory;
            }

            // add SubCategory
            product.addSubCategory(subCategoryRequest);
            return subCategoryRepository.save(subCategoryRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found Product with id = " + productId));
        return new ResponseEntity<>(subCategory, HttpStatus.CREATED);
    }

    @PutMapping("/subCategories/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
    public ResponseEntity<SubCategory> updateSubCategory(@PathVariable("id") long id, @RequestBody SubCategory subCategoryRequest) {
        SubCategory subCategory = subCategoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("SubCategoryId " + id + " not found"));
        subCategory.setName(subCategoryRequest.getName());
        subCategory.setLink(subCategoryRequest.getLink());
        return new ResponseEntity<>(subCategoryRepository.save(subCategory), HttpStatus.OK);
    }

    @DeleteMapping("/products/{productId}/subCategories/{subCategoryId}")
    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
    public ResponseEntity<HttpStatus> deleteSubCategoryFromProduct(@PathVariable(value = "productId") Long productId,
                                                                   @PathVariable(value = "subCategoryId") Long subCategoryId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Product with id = " + productId));

        product.removeSubCategory(subCategoryId);
        productRepository.save(product);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/subCategories/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
    public ResponseEntity<HttpStatus> deleteSubCategory(@PathVariable("id") long id) {
        subCategoryRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

package com.hardwarestore.backend.controllers;

import com.hardwarestore.backend.models.Product;
import com.hardwarestore.backend.repository.ProductRepository;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.hardwarestore.backend.exception.ResourceNotFoundException;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired
    ProductRepository productRepository;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(@RequestParam(required = false) String name) {
        List<Product> products = new ArrayList<Product>();
        if (name == null) {
            productRepository.findAll().forEach(products::add);
        } else {
            productRepository.findByNameContaining(name).forEach(products::add);
        }
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Product with id = " + id));
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping("/products")
    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product _product = productRepository.save(new Product(product.getName(), product.getLink(),
                product.getImgThumbnail(), product.getPrice(), product.getPieces(), product.getSummaryTechnicalDetails(),
                product.getOtherTechnicalDetails()));
        return new ResponseEntity<>(_product, HttpStatus.CREATED);
    }

    @PutMapping("/products/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
    public ResponseEntity<Product> updateProduct(@PathVariable("id") long id, @RequestBody Product product) {
        Product _product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Not found Product with id = " + id));
        _product.setName(product.getName());
        _product.setLink(product.getLink());
        _product.setImgThumbnail(product.getImgThumbnail());
        _product.setPrice(product.getPrice());
        _product.setPieces(product.getPieces());
        _product.setSummaryTechnicalDetails(product.getSummaryTechnicalDetails());
        _product.setOtherTechnicalDetails(product.getOtherTechnicalDetails());

        return new ResponseEntity<>(productRepository.save(_product), HttpStatus.OK);
    }

    @DeleteMapping("/products/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
    public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") long id) {
        productRepository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/products")
    @PreAuthorize("hasRole('ADMIN')")
    @ApiOperation(value = "", authorizations = { @Authorization(value="jwtToken") })
    public ResponseEntity<HttpStatus> deleteAllProducts() {
        productRepository.deleteAll();

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    @GetMapping("/products/{name}")
//    public ResponseEntity<List<Product>> findByName(@PathVariable("name") String name) {
//        List<Product> products = productRepository.findByNameContaining(name)
//    }
}

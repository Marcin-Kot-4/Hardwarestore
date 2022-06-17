package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findProductsBySubCategoriesId(Long subCategoryId);

    List<Product> findByNameContaining(String name);
}

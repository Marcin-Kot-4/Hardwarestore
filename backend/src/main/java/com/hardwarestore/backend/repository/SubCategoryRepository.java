package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SubCategoryRepository extends JpaRepository<SubCategory, Long> {
    List<SubCategory> findSubCategoriesByProductsId(Long productId);

    Optional<SubCategory> findSubCategoryByLink(String link);
}

package com.hardwarestore.backend.controllers;

import com.hardwarestore.backend.models.MainCategory;
import com.hardwarestore.backend.repository.CategoryRepository;
import com.hardwarestore.backend.repository.MainCategoryRepository;
import com.hardwarestore.backend.repository.SubCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    MainCategoryRepository mainCategoryRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    SubCategoryRepository subCategoryRepository;

    @GetMapping("/all")
    public Iterable<MainCategory> getCategories() {
        return mainCategoryRepository.findAll();
    }

}

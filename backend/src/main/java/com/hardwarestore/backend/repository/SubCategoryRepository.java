package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.SubCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubCategoryRepository extends CrudRepository<SubCategory, Long> {
}

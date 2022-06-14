package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.MainCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MainCategoryRepository extends CrudRepository<MainCategory, Long> {
}

package com.hardwarestore.backend.repository;


import com.hardwarestore.backend.models.UserProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserProductRepository extends JpaRepository<UserProduct, Long> {

    List<UserProduct> findUserProductByUserId(Long userId);

    @Query("select c from UserProduct c where c.user.id = ?1 and c.product.id = ?2")
    UserProduct findUserProductByUserIdAndProductId(Long userId, Long productId);

    @Modifying
    @Query("delete from UserProduct c where c.user.id = ?1")
    void deleteAllByUserId(Long userId);
}

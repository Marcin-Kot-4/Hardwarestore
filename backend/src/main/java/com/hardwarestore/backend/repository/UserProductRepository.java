package com.hardwarestore.backend.repository;


import com.hardwarestore.backend.models.UserProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProductRepository extends JpaRepository<UserProduct, Long> {

//    List<UserProduct> findUserProductByUserId(Long userId);

//    @Query("select c from UserProduct c where c.user_id = ?1 and c.product_id = ?2")
//    UserProduct findUserProductByUserIdAndProductId(Long userId, Long productId);

}

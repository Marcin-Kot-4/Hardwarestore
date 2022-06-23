package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.OrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderProductRepository extends JpaRepository<OrderProduct, Long> {
}

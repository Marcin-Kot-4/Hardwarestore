package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllOrdersByUserId(Long userId);
}

package com.hardwarestore.backend.repository;

import com.hardwarestore.backend.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
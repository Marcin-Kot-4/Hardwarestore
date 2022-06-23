package com.hardwarestore.backend.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "payment_status")
    private String paymentStatus;

    @Column(name = "delivery_method")
    private String deliveryMethod;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "payment_cost")
    private BigDecimal paymentCost;

    @Column(name = "delivery_cost")
    private BigDecimal deliveryCost;

    @Column(name = "total_amount")
    private BigDecimal totalAmount;

    @Column(name = "user_id")
    private Long userId;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<OrderProduct> orderProducts = new ArrayList<OrderProduct>();

    public Order(String paymentStatus, String deliveryMethod, String paymentMethod, BigDecimal paymentCost,
                 BigDecimal deliveryCost, BigDecimal totalAmount, Long userId) {
        this.paymentStatus = paymentStatus;
        this.deliveryMethod = deliveryMethod;
        this.paymentMethod = paymentMethod;
        this.paymentCost = paymentCost;
        this.deliveryCost = deliveryCost;
        this.totalAmount = totalAmount;
        this.userId = userId;
        this.orderProducts = null;
    }
}

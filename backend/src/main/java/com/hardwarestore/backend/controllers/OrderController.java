package com.hardwarestore.backend.controllers;

import com.hardwarestore.backend.models.Order;
import com.hardwarestore.backend.models.OrderProduct;
import com.hardwarestore.backend.models.UserProduct;
import com.hardwarestore.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    OrderProductRepository orderProductRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserProductRepository userProductRepository;

    @PostMapping("/order")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {

        Order _order = orderRepository.save(new Order(order.getPaymentStatus(), order.getDeliveryMethod(),
                order.getPaymentMethod(), order.getPaymentCost(), order.getDeliveryCost(), order.getTotalAmount(),
                order.getUserId()));

        List<UserProduct> userProducts = userProductRepository.findUserProductByUserId(order.getUserId());

        List<OrderProduct> orderProducts = new ArrayList<OrderProduct>();

        for (int i = 0; i < userProducts.size(); i++) {
            OrderProduct _orderProduct = new OrderProduct(_order, userProducts.get(i).getProduct().getId(), userProducts.get(i).getQuantity());
            orderProducts.add(_orderProduct);
        }

        _order.setOrderProducts(orderProducts);
        orderRepository.save(_order);

//        userProductRepository.deleteAllByUserId(order.getUserId());

        return new ResponseEntity<>(_order, HttpStatus.CREATED);
    }

    @GetMapping("/orders/{userId}")
    public ResponseEntity<List<Order>> getOrders(@PathVariable("userId") Long userId){
        List<Order> orders = orderRepository.findAllOrdersByUserId(userId);
        return new ResponseEntity(orders , HttpStatus.OK);
    }

}

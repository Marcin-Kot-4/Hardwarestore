//package com.hardwarestore.backend.controllers;
//
//import com.hardwarestore.backend.exception.ResourceNotFoundException;
//import com.hardwarestore.backend.models.UserProduct;
//import com.hardwarestore.backend.repository.ProductRepository;
//import com.hardwarestore.backend.repository.UserProductRepository;
//import com.hardwarestore.backend.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("/api")
//public class CartController {
//    @Autowired
//    private UserProductRepository userProductRepository;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    @GetMapping("/cart/{userId}")
//    public ResponseEntity<List<UserProduct>> getCartByUserId(@PathVariable(value = "userId") Long userId) {
//        if (!userRepository.existsById(userId)) {
//            throw new ResourceNotFoundException("Nie znaleziono użytkownika o id = " + userId);
//        }
//        List<UserProduct> userProduct = userProductRepository.findUserProductByUserId(userId);
//        return new ResponseEntity<>(userProduct, HttpStatus.OK);
//    }
//
////    @PostMapping("/cart/{userId}/{productId}")
////    public ResponseEntity<List<UserProduct>> addToCart(@PathVariable(value = "userId") Long userId,
////                                                       @PathVariable(value = "productId") Long productId) {
////        if (!userRepository.existsById(userId)) {
////            throw new ResourceNotFoundException("Nie znaleziono użytkownika o id = " + userId);
////        }
////        if (!productRepository.existsById(productId)) {
////            throw new ResourceNotFoundException("Nie znaleziono produktu o id = " + productId);
////        }
////
//
////        if (userProductRepository.findUserProductByUserIdAndProductId(userId, productId))
//
////    }
//}

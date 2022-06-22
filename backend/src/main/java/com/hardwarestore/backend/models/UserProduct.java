package com.hardwarestore.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "users_products")
@Getter
@Setter
@NoArgsConstructor
public class UserProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "product_id")
    @JsonManagedReference
    private Product product;

    // additional field
    private Long quantity;

    public UserProduct(User user, Product product, Long quantity) {
        this.user = user;
        this.product = product;
        this.quantity = quantity;
    }
}

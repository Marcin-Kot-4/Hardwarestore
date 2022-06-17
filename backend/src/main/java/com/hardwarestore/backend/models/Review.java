package com.hardwarestore.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "reviews")
@Getter
@Setter
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private Long stars;

    @Column(nullable = false)
    private java.sql.Timestamp timestamp;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Review() {
    }

    public Review(String content, Long stars, Timestamp timestamp, Product product, User user) {
        this.content = content;
        this.stars = stars;
        this.timestamp = timestamp;
        this.product = product;
        this.user = user;
    }
}

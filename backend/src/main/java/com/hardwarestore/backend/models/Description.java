package com.hardwarestore.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "descriptions")
@Getter
@Setter
public class Description {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String heading;

    @Column(nullable = false)
    private String content;

    @Column
    private String image;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public Description() {
    }

    public Description(String heading, String content, String image, Product product) {
        this.heading = heading;
        this.content = content;
        this.image = image;
        this.product = product;
    }
}

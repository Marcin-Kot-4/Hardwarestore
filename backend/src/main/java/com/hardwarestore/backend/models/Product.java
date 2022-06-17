package com.hardwarestore.backend.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "products")
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String link;

    @Column(name = "img_thumbnail", nullable = false)
    private String imgThumbnail;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private Long pieces;

    @Column(name = "summary_technical_details", nullable = false)
    private String summaryTechnicalDetails;

    @Column(name = "other_technical_details", nullable = false)
    private String otherTechnicalDetails;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Description> descriptions = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY,
    cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "product_sub_categories",
    joinColumns = {@JoinColumn(name = "product_id")},
    inverseJoinColumns = {@JoinColumn(name = "sub_category_id")})
    private Set<SubCategory> subCategories = new HashSet<>();



    public Product(){
    }

    public Product(String name, String link, String imgThumbnail, BigDecimal price, Long pieces,
                   String summaryTechnicalDetails, String otherTechnicalDetails) {
        this.name = name;
        this.link = link;
        this.imgThumbnail = imgThumbnail;
        this.price = price;
        this.pieces = pieces;
        this.summaryTechnicalDetails = summaryTechnicalDetails;
        this.otherTechnicalDetails = otherTechnicalDetails;
    }


    public void addSubCategory(SubCategory subCategory) {
        this.subCategories.add(subCategory);
        subCategory.getProducts().add(this);
    }

    public void removeSubCategory(long subCategoryId) {
        SubCategory subCategory = this.subCategories.stream().filter(sC -> sC.getId() == subCategoryId).findFirst().orElse(null);
        if (subCategory != null) {
            this.subCategories.remove(subCategory);
            subCategory.getProducts().remove(this);
        }
    }

}
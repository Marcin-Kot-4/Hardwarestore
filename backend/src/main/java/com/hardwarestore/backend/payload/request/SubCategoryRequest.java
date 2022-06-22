package com.hardwarestore.backend.payload.request;

import javax.validation.constraints.NotBlank;

public class SubCategoryRequest {

    @NotBlank
    private String link;

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}

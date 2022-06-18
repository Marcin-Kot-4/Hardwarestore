package com.hardwarestore.backend.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.TimeZone;

@Entity
@Table(name = "black_list_jwt")
@Getter
@Setter
public class BlackListJwt {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String token;

    @Column(name = "expires_at")
    private Timestamp expiresAt;

    public BlackListJwt(String token) {
        this.token = token;

        final long timeAtLocal = System.currentTimeMillis();
        final long offset = TimeZone.getDefault().getOffset(timeAtLocal);

        this.expiresAt = new Timestamp(timeAtLocal + offset + (1000 * 60 * 60 * 24));
    }

    public BlackListJwt() {

    }
}

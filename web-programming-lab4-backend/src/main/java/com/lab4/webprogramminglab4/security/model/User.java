package com.lab4.webprogramminglab4.security.model;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@Table(name = "WEB4_USERS")
@NoArgsConstructor
public class User {
    @Id
    @Column(name = "username", nullable = false)
    private String name;

    @Column(name = "password", nullable = false)
    private String passwordHash;

    @Override
    public int hashCode() {
        return 0;
    }
}

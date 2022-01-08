package com.lab4.webprogramminglab4.security.dao;

import com.lab4.webprogramminglab4.security.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<User, String> {
    User findByName(String name);
}

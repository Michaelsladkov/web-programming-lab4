package com.lab4.webprogramminglab4.security.service;

import com.lab4.webprogramminglab4.security.model.User;

public interface UserService {
    User getUserByName(String name);
    User saveUser(User user);
}

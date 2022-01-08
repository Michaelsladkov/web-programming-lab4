package com.lab4.webprogramminglab4.security;

import com.lab4.webprogramminglab4.security.dto.UserRequest;
import com.lab4.webprogramminglab4.security.model.User;
import com.lab4.webprogramminglab4.security.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserServiceImpl userServiceImpl;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthController(UserServiceImpl userServiceImpl, PasswordEncoder encoder) {
        this.userServiceImpl = userServiceImpl;
        passwordEncoder = encoder;
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<?> findUser(@RequestBody UserRequest user) {
        User realUser = userServiceImpl.getUserByName(user.getUsername());
        if (realUser == null) return ResponseEntity.badRequest().body("No such user");
        if (!passwordEncoder.matches(user.getPassword(), realUser.getPasswordHash())) {
            return ResponseEntity.badRequest().body("Wrong password");
        }
        return ResponseEntity.ok().body("Access provided");
    }

    @CrossOrigin
    @PostMapping(value = "/register")
    public ResponseEntity<?> saveUser(@RequestBody UserRequest user) {
        User realUser = userServiceImpl.getUserByName(user.getUsername());
        if (realUser != null) return ResponseEntity.badRequest().body("There is already user with this name");
        realUser = new User();
        realUser.setName(user.getUsername());
        System.out.println(user.getPassword());
        realUser.setPasswordHash(passwordEncoder.encode(user.getPassword()));
        System.out.println(realUser.getPasswordHash());
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/auth/register").toString());
        userServiceImpl.saveUser(realUser);
        return ResponseEntity.created(uri).build();
    }
}

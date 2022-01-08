package com.lab4.webprogramminglab4.security.service;

import com.lab4.webprogramminglab4.security.dao.UsersRepository;
import com.lab4.webprogramminglab4.security.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {
    UsersRepository repository;

    @Override
    public User saveUser(User user) {
        return repository.save(user);
    }

    @Override
    public User getUserByName(String name) {
        return repository.findByName(name);
    }

    @Autowired
    public UserServiceImpl(UsersRepository usersRepository) {
        repository = usersRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByName(username);
        if (user == null) {
            throw new UsernameNotFoundException("No such user");
        }
        return new org.springframework.security.core.userdetails.User(
                user.getName(), user.getPasswordHash(), new ArrayList<>()
        );
    }
}

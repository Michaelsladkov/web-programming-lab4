package com.lab4.webprogramminglab4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class WebProgrammingLab4Application {

    public static void main(String[] args) {
        SpringApplication.run(WebProgrammingLab4Application.class, args);
    }

}
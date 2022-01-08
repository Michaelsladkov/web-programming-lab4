package com.lab4.webprogramminglab4.dao;

import com.lab4.webprogramminglab4.models.Shot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ShotsRepository extends JpaRepository<Shot, Long> {
    List<Shot> findByAuthor(String author);

    @Transactional
    void deleteAllByAuthor(String author);
}

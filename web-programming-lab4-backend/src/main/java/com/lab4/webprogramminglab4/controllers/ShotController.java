package com.lab4.webprogramminglab4.controllers;

import com.lab4.webprogramminglab4.dao.ShotsRepository;
import com.lab4.webprogramminglab4.dto.ShotRepresentation;
import com.lab4.webprogramminglab4.dto.ShotRequest;
import com.lab4.webprogramminglab4.security.UsernameDecoder;
import com.lab4.webprogramminglab4.service.ShotProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@RestController
public class ShotController {
    private ShotProcessor shotProcessor;
    private ShotsRepository repository;

    @Autowired
    public void setRepository(ShotsRepository shotsRepository) {repository = shotsRepository;}

    @Autowired
    public void setShotProcessor(ShotProcessor newShotProcessor) {
        shotProcessor = newShotProcessor;
    }

    @CrossOrigin
    @PostMapping("/shot")
    public ShotRepresentation processShot(@RequestBody ShotRequest shotRequest) {
        return shotProcessor.processShot(shotRequest);
    }

    @CrossOrigin
    @GetMapping("/shot")
    public List<ShotRepresentation> getAll(HttpServletRequest request) {
        String token = request.getHeader(AUTHORIZATION);
        String author = UsernameDecoder.decodeUsername(token);
        return repository.findByAuthor(author).stream().map(ShotRepresentation::new).collect(Collectors.toList());
    }

    @CrossOrigin
    @DeleteMapping("/shot")
    public void removeAll(HttpServletRequest request) {
        String token = request.getHeader(AUTHORIZATION);
        String author = UsernameDecoder.decodeUsername(token);
        repository.deleteAllByAuthor(author);
    }
}

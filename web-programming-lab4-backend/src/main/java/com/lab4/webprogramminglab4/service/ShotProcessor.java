package com.lab4.webprogramminglab4.service;

import com.lab4.webprogramminglab4.models.Shot;
import com.lab4.webprogramminglab4.dto.ShotRepresentation;
import com.lab4.webprogramminglab4.dto.ShotRequest;
import com.lab4.webprogramminglab4.dao.ShotsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class ShotProcessor {
    private static final float NANOSECONDS_IN_SECOND = 1000000000f;

    private final ShotsRepository repository;

    @Autowired
    public ShotProcessor (ShotsRepository shotsRepository) {
        repository = shotsRepository;
    }

    public ShotRepresentation processShot(ShotRequest shotRequest) {
        long begin = System.nanoTime();
        boolean success = checkShot(shotRequest.getX(), shotRequest.getY(), shotRequest.getR());
        Shot shot = new Shot(shotRequest.getAuthor(), shotRequest.getX(), shotRequest.getY(), shotRequest.getR(),
                success, LocalDateTime.now(), 0);
        float processingTime = (System.nanoTime() - begin)/NANOSECONDS_IN_SECOND;
        shot.setProcessingTime(processingTime);
        repository.save(shot);
        return new ShotRepresentation(shotRequest.getX(), shotRequest.getY(), shotRequest.getR(),
                success, LocalDateTime.now(), processingTime);
    }

    private boolean checkShot(float x, float y, float r) {
        if (x > 0) {
            if (y > 0) {
                return y < r/2 - x;
            } else {
                return x < r && y > -r/2;
            }
        } else {
            if (y > 0) {
                return false;
            } else {
                return x * x + y * y < r * r;
            }
        }
    }
}

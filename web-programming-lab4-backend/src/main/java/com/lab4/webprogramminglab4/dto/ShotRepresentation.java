package com.lab4.webprogramminglab4.dto;

import com.lab4.webprogramminglab4.models.Shot;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@AllArgsConstructor
public class ShotRepresentation {
    @Getter
    private float x;

    @Getter
    private float y;

    @Getter
    private float r;

    @Getter
    private boolean success;

    @Getter
    private LocalDateTime dateTime;

    @Getter
    private float processingTime;

    public ShotRepresentation(Shot shot) {
        this.x = shot.getX();
        this.y = shot.getY();
        this.r = shot.getR();
        this.success = shot.isSuccess();
        this.dateTime = shot.getDateTime();
        this.processingTime = shot.getProcessingTime();
    }
}

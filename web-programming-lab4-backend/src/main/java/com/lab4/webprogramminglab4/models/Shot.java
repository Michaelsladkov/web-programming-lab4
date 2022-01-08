package com.lab4.webprogramminglab4.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.time.LocalDateTime;

@Entity
@Table(name = "WEB4_SHOTS")
@NoArgsConstructor
public class Shot {
    @Id
    @Column(name = "id", nullable = false)
    @Getter
    @Setter
    private long id;

    @Column(name = "author", nullable = false)
    @Getter
    private String author;

    @Column(name="x", nullable = false)
    @Getter
    @Min(-3) @Max(5)
    private float x;

    @Column(name="y", nullable = false)
    @Getter
    @Min(-5) @Max(3)
    private float y;

    @Column(name="r", nullable = false)
    @Getter
    @Min(0) @Max(5)
    private float r;

    @Column(name = "success")
    @Getter
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private boolean success;

    @Column(name = "date_time")
    @Getter
    private LocalDateTime dateTime;

    @Column(name = "execution_time")
    @Getter
    @Setter
    private float processingTime;

    public Shot(String author, float x, float y, float r,
                boolean success, LocalDateTime dateTime, float processingTime) {
        this.author = author;
        this.x = x;
        this.y = y;
        this.r = r;
        this.success = success;
        this.dateTime = dateTime;
        this.processingTime = processingTime;
        this.id = dateTime.getNano() + this.hashCode() + author.hashCode();
    }
}

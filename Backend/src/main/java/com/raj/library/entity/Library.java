package com.raj.library.entity;

import jakarta.persistence.*;

@Entity
@Table(name="Library")
public class Library {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String  name;
    private float avgRating;
    private String libraryMailId;
    private double latitude;
    private double longitude;
    private String websiteLink;
    private String openingTime;
    private String closingTime;
    private String openDays;
    private String ph;
    private String username;

    public Library() {
    }

    public Library(String name, float avgRating, String libraryMailId, double latitude, double longitude, String websiteLink, String openingTime, String closingTime, String openDays, String ph, String username) {
        this.name = name;
        this.avgRating = avgRating;
        this.libraryMailId = libraryMailId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.websiteLink = websiteLink;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.openDays = openDays;
        this.ph = ph;
        this.username = username;
    }
}
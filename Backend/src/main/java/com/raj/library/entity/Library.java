package com.raj.library.entity;

import jakarta.persistence.Id;

public class Library {
    @Id
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

}
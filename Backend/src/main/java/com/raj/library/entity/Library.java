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

}
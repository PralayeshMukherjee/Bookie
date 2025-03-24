package com.raj.library.DTO;

public class UserLibrary {
    private String name;
    private float avgRating;
    private String libraryMailId;
    private double latitude;
    private double longitude;
    private String websiteLink;
    private String openingTime;
    private String closingTime;
    private String openDays;
    private String ph;

    public UserLibrary(String name, float avgRating, String libraryMailId, double latitude, double longitude, String websiteLink, String openingTime, String closingTime, String openDays, String ph) {
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
    }
}

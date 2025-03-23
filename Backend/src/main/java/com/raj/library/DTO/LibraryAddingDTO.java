package com.raj.library.DTO;

public class LibraryAddingDTO {
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

    public LibraryAddingDTO() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getAvgRating() {
        return avgRating;
    }

    public void setAvgRating(float avgRating) {
        this.avgRating = avgRating;
    }

    public String getLibraryMailId() {
        return libraryMailId;
    }

    public void setLibraryMailId(String libraryMailId) {
        this.libraryMailId = libraryMailId;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getWebsiteLink() {
        return websiteLink;
    }

    public void setWebsiteLink(String websiteLink) {
        this.websiteLink = websiteLink;
    }

    public String getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(String openingTime) {
        this.openingTime = openingTime;
    }

    public String getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(String closingTime) {
        this.closingTime = closingTime;
    }

    public String getOpenDays() {
        return openDays;
    }

    public void setOpenDays(String openDays) {
        this.openDays = openDays;
    }

    public String getPh() {
        return ph;
    }

    public void setPh(String ph) {
        this.ph = ph;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

package com.raj.library.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="UserAddress")
public class AddressUser {
    @Id
    private String id;
    private String pincode;
    private String name;
    private String phone;
    private String locality;
    private String address;
    private String city;
    private String state;
    private String landmark;
    private String alternatePhone;
    private String addressType;
    private String username;

    public AddressUser(String id, String pincode, String name, String phone, String locality, String address, String city, String state, String landmark, String alternatePhone, String addressType, String username) {
        this.id = id;
        this.pincode = pincode;
        this.name = name;
        this.phone = phone;
        this.locality = locality;
        this.address = address;
        this.city = city;
        this.state = state;
        this.landmark = landmark;
        this.alternatePhone = alternatePhone;
        this.addressType = addressType;
        this.username = username;
    }
}

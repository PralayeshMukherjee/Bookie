package com.raj.library.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="UserAddress")
public class AddressUser {
    @Id
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
    private String id;
}

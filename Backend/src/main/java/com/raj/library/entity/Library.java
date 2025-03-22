package com.raj.library.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Library")
public class Library {
    private Long id;
    private String name;
    private String librarian;
    private String ph;
    private String mailId;
    private byte[] imageData;
}

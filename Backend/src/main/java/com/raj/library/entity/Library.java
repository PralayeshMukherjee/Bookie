package com.raj.library.entity;

import jakarta.persistence.*;

@Entity
@Table(name="Library")
public class Library {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String librarian;
    private String ph;
    private String mailId;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] imageData;

    public Library() {
    }

    public Library(String name, String librarian, String ph, String mailId, byte[] imageData) {
        this.name = name;
        this.librarian = librarian;
        this.ph = ph;
        this.mailId = mailId;
        this.imageData = imageData;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLibrarian() {
        return librarian;
    }

    public void setLibrarian(String librarian) {
        this.librarian = librarian;
    }

    public String getPh() {
        return ph;
    }

    public void setPh(String ph) {
        this.ph = ph;
    }

    public String getMailId() {
        return mailId;
    }

    public void setMailId(String mailId) {
        this.mailId = mailId;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }
}

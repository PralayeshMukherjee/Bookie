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
}

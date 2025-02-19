package com.raj.library.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private int price;
    private String author;
    private String stocks;

//    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<SellerBook> sellerBooks = new ArrayList<>();

    public Book() {
    }

    public Book(Long id, String title, String author, String stocks,int price, List<Seller> sellers) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stocks = stocks;
        this.price = price;
    }

//    public List<SellerBook> getSellerBooks() {
//        return sellerBooks;
//    }
//
//    public void setSellerBooks(List<SellerBook> sellerBooks) {
//        this.sellerBooks = sellerBooks;
//    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getStocks() {
        return stocks;
    }

    public void setStocks(String stocks) {
        this.stocks = stocks;
    }

}

package com.raj.library.controller;

import com.raj.library.Service.BookSellersService;
import com.raj.library.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/fetchSellers")
public class BookSellers {

    @Autowired
    private BookSellersService bookSellersService;

    public List<Book> getAllBook(@RequestParam String title){

    }
}

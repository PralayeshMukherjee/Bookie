package com.raj.library.controller;

import com.raj.library.Service.BookSellersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fetchSellers")
public class BookSellers {

    @Autowired
    private BookSellersService bookSellersService;
}

package com.raj.library.Service;

import com.raj.library.entity.Book;
import com.raj.library.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchQueryService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<Book> getALlBooksWhereTitleMatched(String title){

    }
}

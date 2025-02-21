package com.raj.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/search")
public class SearchingQuery {

    @Autowired
    private SearchingQuery searchingQuery;

    public List<String> searchBook(@RequestParam String query){
        return  searchingQuery.searchBook(query);
    }
}

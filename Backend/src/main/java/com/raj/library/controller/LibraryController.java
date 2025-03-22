package com.raj.library.controller;

import com.raj.library.DTO.LibraryRegDTO;
import com.raj.library.Service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/library")
public class LibraryController {
    @Autowired
    private LibraryService libraryService;
    public Map<String,Boolean> AddLibraryController(@RequestBody LibraryRegDTO libraryRegDTO){

    }
}

package com.raj.library.controller;

import com.raj.library.DTO.LibraryLoginDTO;
import com.raj.library.DTO.LibraryRegDTO;
import com.raj.library.Service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/library")
public class LibraryController {
    @Autowired
    private LibraryService libraryService;
    @PostMapping("/addLibrary")
    public Map<String,Boolean> AddLibraryController(@RequestBody LibraryRegDTO libraryRegDTO){
        String username = libraryRegDTO.getUsername();
        String password = libraryRegDTO.getPassword();
        String ph = libraryRegDTO.getPh();
        String mailId = libraryRegDTO.getMailId();
        boolean isAdded = libraryService.AddLibrary(username,password,mailId,ph);
        return Map.of("isAdded",isAdded);
    }
    @PostMapping("/loginLibrary")
    public boolean LoginLibrary(@RequestBody LibraryLoginDTO libraryLoginDTO){
        String username = libraryLoginDTO.getUsername();
        String password = libraryLoginDTO.getPassword();
    }
}

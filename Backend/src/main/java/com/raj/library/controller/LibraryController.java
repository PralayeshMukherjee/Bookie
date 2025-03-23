package com.raj.library.controller;

import com.raj.library.DTO.LibraryAddingDTO;
import com.raj.library.Service.LibraryService;
import com.raj.library.entity.Library;
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
    public Map<String,Boolean> addLibrary(@RequestBody LibraryAddingDTO libraryAddingDTO){
        String name = libraryAddingDTO.getName();
        float avgRating = libraryAddingDTO.getAvgRating();
        String libraryMailId = libraryAddingDTO.getLibraryMailId();
        double latitude = libraryAddingDTO.getLatitude();
        double longitude = libraryAddingDTO.getLongitude();
        String websiteLink = libraryAddingDTO.getWebsiteLink();
        String openingTime = libraryAddingDTO.getOpeningTime();
        String closingTime = libraryAddingDTO.getClosingTime();
        String openDays = libraryAddingDTO.getOpenDays();
        String ph = libraryAddingDTO.getLibraryMailId();
        String username = libraryAddingDTO.getUsername();
        Library library = new Library(name,avgRating,libraryMailId,latitude,longitude,websiteLink,openingTime,closingTime,openDays,ph,username);
        boolean isAdded = libraryService.addLibrary(library);
        return Map.of("isAdded",isAdded);
    }
}

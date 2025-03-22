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
    public Map<String,String> LoginLibrary(@RequestBody LibraryLoginDTO libraryLoginDTO){
        String username = libraryLoginDTO.getUsername();
        String password = libraryLoginDTO.getPassword();
        int result = libraryService.LoginLibraryService(username,password);
        if(result==2){
            return Map.of("result","successfully Login");
        }else if(result==1){
            return Map.of("result","wrong password given");
        }else if(result==0){
            return Map.of("result","User not Register");
        }
    }
}

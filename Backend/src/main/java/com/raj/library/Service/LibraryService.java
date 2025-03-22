package com.raj.library.Service;

import com.raj.library.entity.Library;
import com.raj.library.repository.LibraryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibraryService {
    @Autowired
    private LibraryRepo libraryRepo;
    public boolean AddLibrary(String username, String password, String mailId, String ph){
        Library library = new Library(username,password,ph,mailId);
        try{
            libraryRepo.save(library);
            return true;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }
    public boolean LoginLibraryService(String username, String password){

    }
}

package com.raj.library.Service;

import com.raj.library.entity.Library;
import com.raj.library.repository.LibraryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibraryService {
    @Autowired
    private LibraryRepo libraryRepo;
    public boolean addLibrary(Library library){
        try{
            library.setAvgRating(3.0F);
            libraryRepo.save(library);
            return true;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }
    public List<Library> getLibraryService(String username){

    }
}

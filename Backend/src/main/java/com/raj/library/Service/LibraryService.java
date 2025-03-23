package com.raj.library.Service;

import com.raj.library.entity.Librarian;
import com.raj.library.repository.LibraryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibraryService {
    @Autowired
    private LibraryRepo libraryRepo;
    public boolean AddLibrary(String username, String password, String mailId, String ph){
        Librarian library = new Librarian(username,password,ph,mailId);
        try{
            libraryRepo.save(library);
            return true;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }
    }
    public int LoginLibraryService(String username, String password){
        try{
            if(libraryRepo.existsByUsername(username)){
                if(libraryRepo.existsByPassword(password)){
                    return 2;
                }else{
                    return 1;
                }
            }else{
                return 0;
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
            return -1;
        }
    }
}

package com.raj.library.Service;

import com.raj.library.repository.LibraryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibraryService {
    @Autowired
    private LibraryRepo libraryRepo;
    public boolean AddLibrary(String name,String password,String mailId,String ph){

    }
}

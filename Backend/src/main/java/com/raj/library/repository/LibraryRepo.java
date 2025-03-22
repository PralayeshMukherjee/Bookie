package com.raj.library.repository;

import com.raj.library.entity.Library;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibraryRepo extends JpaRepository<Library,Long> {

}

package com.raj.library.repository;

import com.raj.library.entity.Library;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibraryRepo extends JpaRepository<Library,Long> {
    boolean existsByUsername(String username);
    boolean existsByPassword(String password);
}

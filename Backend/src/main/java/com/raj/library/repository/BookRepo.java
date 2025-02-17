package com.raj.library.repository;

import com.raj.library.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<Book,Long> {
}

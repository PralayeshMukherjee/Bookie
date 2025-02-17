package com.raj.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<Long,String> {
}

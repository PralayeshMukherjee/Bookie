package com.raj.library.repository;

import com.raj.library.entity.AddressUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAddressRepo extends JpaRepository<AddressUser,Long> {
}

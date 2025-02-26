package com.raj.library.Service;

import com.raj.library.repository.UserAddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    private UserAddressRepo userAddressRepo;
}

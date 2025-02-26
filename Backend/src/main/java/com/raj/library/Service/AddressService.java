package com.raj.library.Service;

import com.raj.library.repository.UserAddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    private UserAddressRepo userAddressRepo;

    public boolean AddAddressOfUserService(String name,String phone,String pincode,String locality,String address,String city,String state,String landmark,String alternatePhone,String addressType,String username,Long id){

    }
}

package com.raj.library.controller;

import com.raj.library.DTO.UserAddress;
import com.raj.library.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/UserDetails")
public class UserDetails {

    @Autowired
    private UserService userService;
    @GetMapping("/UserID")
    public Long getUserIdByUsername(@RequestParam String username){
        return userService.getUserIdByUsernameService(username);
    }
    public Map<String,Boolean> saveUserAddress(@RequestBody UserAddress userAddress){

    }
}

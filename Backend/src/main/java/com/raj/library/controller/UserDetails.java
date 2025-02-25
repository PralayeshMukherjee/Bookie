package com.raj.library.controller;

import com.raj.library.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/UserDetails")
public class UserDetails {

    @Autowired
    private UserService userService;

    public String getUserIdByUsername(@RequestParam String username){

    }
}

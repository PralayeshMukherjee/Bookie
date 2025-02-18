package com.raj.library.controller;

import com.raj.library.DTO.ContactHolder;
import com.raj.library.Service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/main")
public class MailController {

    @Autowired
    private MailService mailService;
    public void sendMail(@RequestBody ContactHolder contactHolder){
        String username = contactHolder.getUsername();
        String email = contactHolder.getEmail();
        String mobile = contactHolder.getTel();
        String message = contactHolder.getMessage();
    }
}

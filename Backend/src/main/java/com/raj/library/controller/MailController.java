package com.raj.library.controller;

import com.raj.library.DTO.ContactHolder;
import com.raj.library.Service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/mail")
public class MailController {

    @Autowired
    private MailService mailService;
    @PostMapping("/contact")
    public Map<String, Boolean> sendMail(@RequestBody ContactHolder contactHolder){
        String username = contactHolder.getUsername();
        String email = contactHolder.getEmail();
        String mobile = contactHolder.getTel();
        String message = contactHolder.getMessage();
        System.out.println("username "+username+" email "+email+" mobile "+mobile+" message "+message);
        boolean isContactMailSend = mailService.sendMailToContact(username,email,mobile,message);
        return Map.of("isContactMailSend",isContactMailSend);
    }
}

package com.raj.library.controller;

import com.raj.library.DTO.ContactHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/main")
public class MailController {

    public void sendMail(@RequestBody ContactHolder contactHolder){

    }
}

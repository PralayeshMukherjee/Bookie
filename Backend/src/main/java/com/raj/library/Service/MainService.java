package com.raj.library.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MainService {

    @Autowired
    private JavaMailSender javaMailSender;
    public boolean sendMailToContact(String username,String email,String mobile, String message){

    }
}

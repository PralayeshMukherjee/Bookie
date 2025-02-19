package com.raj.library.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class OtpService {
    private static final int otpLength = 6;
    private Map<String,String> otpMapping = new HashMap<>();
    public boolean generateOTP(String username){
        String generatedOTP = "";
        for(int i=0;i<=otpLength;i++){
            generatedOTP += String.valueOf((Math.random()*9)+1);
        }
        otpMapping.put(username,generatedOTP);
        return true;
    }

    @Autowired
    private JavaMailSender javaMailSender;
    public boolean sendOTPToEmail(String username,String email){

    }
}

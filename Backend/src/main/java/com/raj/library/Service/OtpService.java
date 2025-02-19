package com.raj.library.Service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class OtpService {
    private static final int otpLength = 6;
    private Map<String,String> otpMapping = new HashMap<>();
    public void generateOTP(String username){
        String generatedOTP = "";
        for(int i=0;i<=otpLength;i++){
            generatedOTP += String.valueOf((Math.random()*9)+1);
        }
        otpMapping.put(username,generatedOTP);
    }

}

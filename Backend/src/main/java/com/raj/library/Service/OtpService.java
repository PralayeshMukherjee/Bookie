package com.raj.library.Service;

import org.springframework.stereotype.Service;

import java.security.SecureRandom;

@Service
public class OtpService {
    private static final int otp_Length = 6;
    public String generateOTP(){
        SecureRandom random = new SecureRandom();
        StringBuilder sb = new StringBuilder();

        for(int i=0;i<otp_Length;i++){
            sb.append(random.nextInt(10));
        }
        return sb.toString();
    }
}

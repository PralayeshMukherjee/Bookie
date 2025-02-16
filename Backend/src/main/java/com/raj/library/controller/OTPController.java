package com.raj.library.controller;


import com.raj.library.Service.EmailService;
import com.raj.library.Service.OtpService;
import com.raj.library.TempStore.OTPStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/Verify")
public class OTPController {
    @Autowired
    private OtpService otpService;

    @Autowired
    private EmailService emailService;

    @PostMapping()
    public void generateAndSendOTP(@RequestParam("email") String email){
        if(email.length()==0){
            System.out.println("null");
        }
        String otp = otpService.generateOTP();
        System.out.println(otp);
        emailService.sendOtpEmail(email,otp);
        OTPStorage.storeOtp(email,otp);
    }
}

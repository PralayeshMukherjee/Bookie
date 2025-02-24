package com.raj.library.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public boolean sendMailToContact(String recipient,String username,String email,String mobile, String message){
        if(recipient.isEmpty()){
            recipient = "rajmukherjeegcp@gmail.com"; // Replace with your email
        }
        try {
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);

            messageHelper.setTo(recipient);
            messageHelper.setFrom(email);
            messageHelper.setSubject("New Contact Form Submission");
            messageHelper.setText(
                    "Username: " + username + "\n" +
                            "Email: " + email + "\n" +
                            "Mobile: " + mobile + "\n\n" +
                            "Message:\n" + message
            );

            javaMailSender.send(mimeMessage);
            return true;
        } catch (MessagingException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}

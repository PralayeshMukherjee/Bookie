package com.raj.library.controller;

import com.raj.library.DTO.SellerContact;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/mailSenderSeller")
public class SellerController {

    public Map<String,Boolean> sendMailToSeller(@RequestBody SellerContact sellerContact){

    }
}

package com.raj.library.controller;

import com.raj.library.Service.GeminiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class ChatController {
    @Autowired
    private GeminiService geminiService;
    public Mono<String> chat(@RequestBody String userMessage){
        return geminiService.chat(userMessage);
    }
}

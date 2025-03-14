package com.raj.library.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class GeminiService {
    @Value("${gemini.api.key}")
    private String apiKey;

    private final WebClient webClient;

}

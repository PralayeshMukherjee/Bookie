package com.raj.library.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GeminiService {
    @Value("${gemini.api.key}")
    private String apiKey;
}

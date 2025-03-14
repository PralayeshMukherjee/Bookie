package com.raj.library.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;

@Service
public class GeminiService {
    @Value("${gemini.api.key}")
    private String apiKey;

    private final WebClient webClient;

    public GeminiService(WebClient webClient){
        this.webClient = webClient;
    }
    public Mono<String> chat(String userMessage){
        String formattedPrompt = "Suggest a book related to the following topic in 20 words: " + userMessage;
        return webClient.post()
                .uri(uriBuilder -> uriBuilder.path("/generateText").queryParam("key",apiKey).build())
                .bodyValue(Map.of("prompt",Map.of("text",formattedPrompt)))
                .retrieve()
                .bodyToMono(Map.class)
                .map(response -> response.getOrDefault("candidates", "No response found").toString());
    }
}

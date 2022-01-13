package com.example.demo.card;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CardConfig {
    
    @Bean
    CommandLineRunner commandLineRunner(CardRepository repository) {
        return args -> {
            Card initial = new Card(
                1L, 
                "front", 
                "裏", 
                "メモメモメモメモメモ", 
                false
            );

            Card apple = new Card(
                1L, 
                "apple", 
                "りんご", 
                "I eat apple", 
                false
            );

            Card wbs = new Card(
                2L, 
                "リピータ", 
                "", 
                "データリンク層", 
                false
            );
            
            repository.saveAll(Arrays.asList(initial, apple, wbs));
        };
    }
}

package com.example.demo.folders;

import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FoldersConfig {
	
	@Bean
	CommandLineRunner cammandLineRunner(FoldersRepository repository) {
		return args -> {
			
			Folders vocabulary = new Folders(
                    "vocabulary",
                    LocalDate.of(2021, Month.DECEMBER, 14),
                    LocalDate.of(2021, Month.DECEMBER, 14)
            );
			
			Folders english = new Folders(
                    "english",
                    LocalDate.of(2021, Month.DECEMBER, 14),
                    LocalDate.of(2021, Month.DECEMBER, 14)
            );
			
			repository.saveAll(
				Arrays.asList(vocabulary, english)
			);
		};
	}
	
}

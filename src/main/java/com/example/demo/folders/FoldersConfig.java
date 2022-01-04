package com.example.demo.folders;

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
					"vocabulary");

			Folders english = new Folders(
					"english");

			repository.saveAll(
					Arrays.asList(vocabulary, english));
		};
	}

}

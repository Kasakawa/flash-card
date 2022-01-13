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
					"英単語");

			Folders english = new Folders(
					"基本情報技術者試験");

			repository.saveAll(
					Arrays.asList(vocabulary, english));
		};
	}
}

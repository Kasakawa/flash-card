package com.example.demo.card;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping(path = "/api/v1")
public class CardController {
	private final CardService cardService;

	@Autowired
	public CardController(CardService cardService) {
		this.cardService = cardService;
	}

	@GetMapping(path = "cards")
	public List<Card> getAllCards() {
		return cardService.getAllCards();
	}

	@GetMapping(path = "cards/{cardId}")
	public Card getCard(@PathVariable("cardId") Long cardId) {
		return cardService.getCard(cardId);
	}

	@GetMapping(path = "folders/{folderId}/cards")
	public List<Card> getCardsByFoldersId(
		@PathVariable("folderId") Long foldersId
	) {
		return cardService.getCardsByFolderId(foldersId);
	}

	@PostMapping(path = "cards")
	public void registerNewCard(@RequestBody Card card) {
		cardService.AddNewCard(card);
	}

	@PutMapping(path = "cards/{cardId}")
	public void updateCard(
			@PathVariable("cardId") Long cardId, 
			@RequestBody(required = false) Card newCard) {
		cardService.updateCard(cardId, newCard);
	}

	@DeleteMapping(path = "cards/{cardId}")
	public void deleteCard(@PathVariable("cardId") Long cardId) {
		cardService.deleteCard(cardId);
	}
}

package com.example.demo.card;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService {
	private final CardRepository cardRepository;

	@Autowired
	public CardService(CardRepository cardRepository) {
		this.cardRepository = cardRepository;
	}
	
	// カード一覧の取得
	public List<Card> getAllCards() {
		return cardRepository.findAll();
	}

	// id指定でカードを取得
	public Card getCard(Long cardId) {
		return cardRepository.findById(cardId)
			.orElseThrow(() -> new IllegalStateException("card with id " + cardId + " dose not exist"));
	}

	// フォルダごとのカードリスト取得
    public List<Card> getCardsByFolderId(Long foldersId) {
        return cardRepository.findCardByFolderId(foldersId);
    }

	// カードの追加
	public void AddNewCard(Card card) {
		Optional<Card> cardOptional = cardRepository.findCardByfront(card.getFront());

		if (cardOptional.isPresent()) {
			throw new IllegalStateException("front taken");
		}
		
		cardRepository.save(card);
	}

	// カードの更新
	@Transactional
    public void updateCard(Long cardId, Card newCard) {
		Card card = cardRepository.findById(cardId)
			.orElseThrow(() -> new IllegalStateException("card with id " + cardId + " dose not exist"));
		
		String front = newCard.getFront();
		String back = newCard.getBack();
		String note = newCard.getNote();
		boolean memorized = newCard.getMemorized();

		if (front != null && front.length() > 0 && !Objects.equals(card.getFront(), front)) {
			
			Optional<Card> cardOptional = cardRepository.findCardByfront(front);

			if (cardOptional.isPresent()) {
				throw new IllegalStateException("front taken");
			}

			card.setFront(front);
		}
		
		
		if (!Objects.equals(card.getBack(), back)) {
			card.setBack(back);
		}
		
		
		if (!Objects.equals(card.getNote(), note)) {
			card.setNote(note);
		}

		if (Objects.equals(card.getMemorized(), memorized)) {
			card.setMemorized(memorized);
		}
    }

	// カードの削除
	public void deleteCard(Long cardId) {
		boolean exist = cardRepository.existsById(cardId);

		if (!exist) {
			throw new IllegalStateException("card with id " + cardId + " dose not exist");
		}

		cardRepository.deleteById(cardId);
	}

}

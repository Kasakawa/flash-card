package com.example.demo.card;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface CardRepository extends JpaRepository<Card, Long> {

    @Query("SELECT c from Card c WHERE c.foldersId = ?1")
    List<Card> findCardByFolderId(Long foldersId);

    @Query("SELECT c from Card c WHERE c.front = ?1")
    Optional<Card> findCardByfront(String front);
}

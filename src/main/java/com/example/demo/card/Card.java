package com.example.demo.card;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table
public class Card {
	@Id
	@SequenceGenerator(name = "cards_sequence", sequenceName = "cards_sequence", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cards_sequence")
	@Column(name = "id")
	private Long id;
	
	@Column(name = "folders_id")
	private Long foldersId;
	
	@Column(name = "front", nullable = false)
	private String front;
	
	@Column(name = "back")
	private String back;
	
	@Column(name = "note")
	private String note;
	
	@Column(name = "memorized", nullable = false)
	private boolean memorized;
	
	@CreationTimestamp
	@Column(name = "created_at", nullable = false)
	private LocalDateTime createdAt;
	
	@UpdateTimestamp
	@Column(name = "updated_at", nullable = false)
	private LocalDateTime updatedAt;
	
	public Card() {
	}
	
	public Card(Long id, Long foldersId, String front, String back, String note, boolean memorized,
			LocalDateTime createdAt, LocalDateTime updatedAt) {
		super();
		this.id = id;
		this.foldersId = foldersId;
		this.front = front;
		this.back = back;
		this.note = note;
		this.memorized = memorized;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	public Card(Long foldersId, String front, String back, String note, boolean memorized, LocalDateTime createdAt,
			LocalDateTime updatedAt) {
		super();
		this.foldersId = foldersId;
		this.front = front;
		this.back = back;
		this.note = note;
		this.memorized = memorized;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Card(Long foldersId, String front, String back, String note, boolean memorized) {
		this.foldersId = foldersId;
		this.front = front;
		this.back = back;
		this.note = note;
		this.memorized = memorized;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getFoldersId() {
		return foldersId;
	}

	public void setFoldersId(Long foldersId) {
		this.foldersId = foldersId;
	}

	public String getFront() {
		return front;
	}

	public void setFront(String front) {
		this.front = front;
	}

	public String getBack() {
		return back;
	}

	public void setBack(String back) {
		this.back = back;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public boolean getMemorized() {
		return memorized;
	}

	public void setMemorized(boolean memorized) {
		this.memorized = memorized;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	@Override
	public String toString() {
		return "Card [id=" + id + ", foldersId=" + foldersId + ", front=" + front + ", back=" + back + ", note=" + note
				+ ", memorized=" + memorized + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}
	
	
	
}

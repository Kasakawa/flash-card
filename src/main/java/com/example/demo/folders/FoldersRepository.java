package com.example.demo.folders;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FoldersRepository extends JpaRepository<Folders, Long>{
	
	@Query("SELECT f FROM Folders f WHERE f.title = ?1")
	Optional<Folders> findFolderByTitle(String title);
}

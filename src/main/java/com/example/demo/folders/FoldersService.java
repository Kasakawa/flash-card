package com.example.demo.folders;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoldersService {
	
	private final FoldersRepository foldersRepository;
	
	@Autowired
	public FoldersService(FoldersRepository foldersRepository) {
		this.foldersRepository = foldersRepository;
	}
	
    public List<Folders> getFolders() {
        return foldersRepository.findAll();
    }

//    フォルダの追加
	public void addNewFolder(Folders folders) {
		Optional<Folders> folderOptional = foldersRepository.findFolderByTitle(folders.getTitle());
		
		if (folderOptional.isPresent()) {
			throw new IllegalStateException("title taken");
		}
		
		foldersRepository.save(folders);
		
		System.out.println(folders);
	}
	
//	フォルダのアップデート
	@Transactional
	public void updateFolder(Long folderId, String title) {
		Folders folder = foldersRepository.findById(folderId).orElseThrow(() -> new IllegalStateException("folder with id " + folderId + " dose not exist"));
		
		if (title != null && title.length() > 0 && !Objects.equals(folder.getTitle(), title)) {
			
			Optional<Folders> folderOprional = foldersRepository.findFolderByTitle(title);
			
			if (folderOprional.isPresent()) {
				throw new IllegalStateException("title taken");
			}
			
			folder.setTitle(title);
		}
	}

//	フォルダの削除
	public void deleteFolder(Long folderId) {
		boolean exists = foldersRepository.existsById(folderId);
		
		if (!exists) {
			throw new IllegalStateException("folder with id " + folderId + " dose not exist");
		}
		
		foldersRepository.deleteById(folderId);
	}

	
}
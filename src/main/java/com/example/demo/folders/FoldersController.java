package com.example.demo.folders;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/folders")
public class FoldersController {
    private final FoldersService foldersService;

    @Autowired
    public FoldersController(FoldersService foldersService) {
        this.foldersService = foldersService;
    }

    @GetMapping
    public List<Folders> getFolders() {
        return foldersService.getFolders();
    }
    
    @PostMapping
    public void registerNewFolder(@RequestBody Folders folders) {
		foldersService.addNewFolder(folders);
	}
    
    @PutMapping(path = "{folderId}")
    public void updateFolder(
    		@PathVariable("folderId") Long folderId,
    		@RequestParam(required = false) String title) {
    	foldersService.updateFolder(folderId, title);
    }
    
    @DeleteMapping(path = "{folderId}")
    public void deleteFolder(@PathVariable("folderId") Long folderId) {
		foldersService.deleteFolder(folderId);
	}
}
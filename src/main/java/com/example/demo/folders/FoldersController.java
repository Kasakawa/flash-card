package com.example.demo.folders;

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

    @GetMapping(path = "{folderId}")
    public Folders getFolder(
            @PathVariable("folderId") Long folderId) {
        return foldersService.getFolder(folderId);
    }

    @PostMapping
    public void registerNewFolder(@RequestBody Folders folders) {
        foldersService.addNewFolder(folders);
    }

    @PutMapping(path = "{folderId}")
    public void updateFolder(
            @PathVariable("folderId") Long folderId,
            @RequestBody(required = false) Folders newFolder) {
        foldersService.updateFolder(folderId, newFolder);
    }

    @DeleteMapping(path = "{folderId}")
    public void deleteFolder(@PathVariable("folderId") Long folderId) {
        foldersService.deleteFolder(folderId);
    }
}
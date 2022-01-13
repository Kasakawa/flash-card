package com.example.demo.folders;

import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class FoldersServiceTest {

    @Mock private FoldersRepository foldersRepository;
    private FoldersService underTest;

    @BeforeEach
    void setUp() {
        underTest = new FoldersService(foldersRepository);
    }

    @Test
    void canGetAllFolders() {
        underTest.getFolders();

        verify(foldersRepository).findAll();
    }

    @Test
    @Disabled
    void canGetFolder() {
        long folderId = 10;
        given(foldersRepository.findById(folderId));
        
        underTest.getFolder(folderId);

        verify(foldersRepository).findById(folderId);
    }

    @Test
    void willThrowWhenGetFolderNotFound() {
        long id = 10;
        given(foldersRepository.findById(id))
            .willReturn(Optional.empty());

        assertThatThrownBy(() -> underTest.getFolder(id))
            .isInstanceOf(IllegalStateException.class)
            .hasMessageContaining("folder with id" + id + " dose not exist");
        
        verify(foldersRepository).findById(id);
    }

    @Test
    void canAddNewFolder() {
        Folders folder = new Folders(
            "英単語"
        );

        underTest.addNewFolder(folder);

        ArgumentCaptor<Folders> folderArgumentCaptor = ArgumentCaptor.forClass(Folders.class);

        verify(foldersRepository).save(folderArgumentCaptor.capture());

        Folders captoredFolder = folderArgumentCaptor.getValue();

        assertThat(captoredFolder).isEqualTo(folder);
    }

    @Test
    @Disabled
    void testUpdateFolder() {

    }

    @Test
    void canDeleteFolder() {
        long id = 10;
        given(foldersRepository.existsById(id))
            .willReturn(true);

        underTest.deleteFolder(id);

        verify(foldersRepository).deleteById(id);
    }

    @Test
    void willThrowWhenDeleteFolderNotFound() {
        long id = 10;
        given(foldersRepository.existsById(id))
            .willReturn(false);

        assertThatThrownBy(() -> underTest.deleteFolder(id))
            .isInstanceOf(IllegalStateException.class)
            .hasMessageContaining("folder with id " + id + " dose not exist");

        verify(foldersRepository, never()).deleteById(any());
    }

}

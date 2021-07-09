import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-document-management',
  templateUrl: './document-management.component.html',
  styleUrls: ['./document-management.component.css']
})
export class DocumentManagementComponent implements OnInit {
  uploadFiles: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(){
    
  }

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.upload($event);
    this.prepareFilesList($event);
  }

  upload(files: FileList) {
    Array.from(files).forEach(item => {
      
    })
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    const uploadFiles = target.files as FileList;
    this.prepareFilesList(uploadFiles);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.uploadFiles.splice(index, 1);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: FileList) {
    Array.from(files).forEach(item => {
      // item.progress = 0;
      this.uploadFiles.push(item);
    })
  }

}

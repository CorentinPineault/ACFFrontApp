import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-document-management',
  templateUrl: './document-management.component.html',
  styleUrls: ['./document-management.component.css']
})
export class DocumentManagementComponent implements OnInit {
  files: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  upload(){}

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: FileList) {
    Array.from(files).forEach(item => {
      // item.progress = 0;
      this.files.push(item);
    })
  }

}

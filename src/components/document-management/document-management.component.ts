import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentService } from 'src/app/services/document/document.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-document-management',
  templateUrl: './document-management.component.html',
  styleUrls: ['./document-management.component.css']
})
export class DocumentManagementComponent implements OnInit {
  files?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  isLoggedIn = false;
  fileInfos?: Observable<any>;

  constructor(private docService: DocumentService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.loadFiles();
    }
  }

  loadFiles(): void {
    this.fileInfos = this.docService.getFiles();
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.files = event.target.files;
    this.uploadFiles()
    this.loadFiles();
  }
  

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.docService.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Fichier envoyé : ' + file.name;
            this.message.push(msg);
            this.fileInfos = this.docService.getFiles();
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = "Erreur d'envoi : " + file.name;
          this.message.push(msg);
          this.fileInfos = this.docService.getFiles();
        });
    }
  }

  uploadFiles(): void {
    this.message = [];

    if (this.files) {
      for (let i = 0; i < this.files.length; i++) {
        this.upload(i, this.files[i]);
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';

// Services
import { FileUploadService } from '../../services/fileUpload.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
// export class AdminComponent implements OnInit {
//   uploadedFiles: any[] = [];

//   constructor() {}
//   onUpload(event) {
//     for (let file of event.files) {
//       this.uploadedFiles.push(file);
//     }
//     // this.messageService.add({
//     //   severity: 'info',
//     //   summary: 'File Uploaded',
//     //   detail: ''
//     // });
//   }

//   ngOnInit(): void {}
// }
export class AdminComponent {
  uplo: File;
  constructor(private fileUploadService: FileUploadService) {}
  // onUpload(event) {
  //   for (let file of event.files) {
  //     this.uplo = file;
  //   }
  //   this.uploadFileToActivity();
  // }
  // uploadFileToActivity() {
  //   this.fileUploadService.fileUpload(this.uplo).subscribe(data => {
  //     alert('Success');
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  //

  // uploadFile(file) {
  //   this.fileUploadService.fileUpload(this.simulationUser).subscribe();
  //   }
}

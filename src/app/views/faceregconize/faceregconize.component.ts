import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FaceRegconizeService } from '../../services/faceregconize.service';
@Component({
  selector: 'app-faceregconize',
  templateUrl: './faceregconize.component.html',
  styleUrls: ['./faceregconize.component.scss']
})
export class FaceRegconizeComponent implements OnInit {
  @ViewChild('file', {static: false}) file: ElementRef;
  @ViewChild('img', {static: false}) img: ElementRef;
  @ViewChild('imgPreview', {static: false}) imgPreview: ElementRef;
  constructor(private faceService: FaceRegconizeService) {
  }

  ngOnInit() {
  }

  process() {
	const _this = this;
	let fileToUpload = this.file.nativeElement.files[0];
	const formData = new FormData();
	formData.append('file', fileToUpload, fileToUpload.name);
	this.faceService.ProcessImage(formData).subscribe((data) => { 
    _this.img.nativeElement.innerHTML = '';
		_this.img.nativeElement.insertAdjacentHTML('beforeend', '<img style="height:100%;" src="' + 'data:image/jpeg;base64,' + data['_buffer'] + '" />');
	   });
  }

  openFileDialog() {
	this.file.nativeElement.click();
  }

  previewImage() {
    if (this.file.nativeElement.files.length === 0)
      return;
 
    const mimeType = this.file.nativeElement.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const _this = this;	
    _this.imgPreview.nativeElement.innerHTML = '';
    const reader = new FileReader();
    reader.readAsDataURL(this.file.nativeElement.files[0]); 
    reader.onload = (_event) => { 
      _this.imgPreview.nativeElement.insertAdjacentHTML('beforeend', '<img style="height:100%;" src="' + reader.result + '" />'); 
      _this.file.nativeElement.text = '';
    };
  }
}

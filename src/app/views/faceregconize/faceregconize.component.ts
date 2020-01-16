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
  constructor(private faceService: FaceRegconizeService) {
  }

  ngOnInit() {
  }

  process() {
	const _this = this;
	let fileToUpload = this.file.nativeElement.files[0];
	const formData = new FormData();
	formData.append('file', fileToUpload, fileToUpload.name);
	this.faceService.ProcessImage(formData).subscribe((data) => { _this.img.nativeElement.src = 'data:image/jpeg;base64,' + data['_buffer'];});
  }
}

import { Component, OnInit } from '@angular/core';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-downloadimg',
  templateUrl: './downloadimg.component.html',
  styleUrls: ['./downloadimg.component.css']
})
export class DownloadimgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downLoadImg(download:any){

 let elem = document.getElementById(download) as HTMLImageElement;
        
 domtoimage.toJpeg(elem, { quality: 0.95 })
 .then(function (dataUrl) {
     var link = document.createElement('a');
     link.download = 'sample.jpeg';
     link.href = dataUrl;
     link.click();
 });
}

}

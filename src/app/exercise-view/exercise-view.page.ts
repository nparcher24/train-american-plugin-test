import { Component, OnInit } from '@angular/core';
import { MCamera } from 'movement-camera';


@Component({
  selector: 'app-exercise-view',
  templateUrl: './exercise-view.page.html',
  styleUrls: ['./exercise-view.page.css'],
})

export class ExerciseViewPage implements OnInit {
  testListener;


  constructor() { }

  ngOnInit() {
    this.testListener = (MCamera as any)
      .addListener('posedetected', (info: any) => {
        console.log(JSON.stringify(info));
        // this.answer = eventData.value;
      });
  }

  testWebPlugin() {
    // CameraPreview.start(cameraPreviewOptions);
    MCamera.showCamera({ lineColor: '000000' });
    // this.answer = '69';
  }
}

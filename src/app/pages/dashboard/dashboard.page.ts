import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';
import { LandmarkList } from '@mediapipe/pose';
import { MCamera } from 'movement-camera';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
})

export class DashboardPage implements OnInit {

  answer;
  testListener;
  constructor() { }

  ngOnInit() {
    // this.testWebPlugin();
    // MCamera.addListener('testEvent', (info: { value: string }) => {
    //   console.log(info.value + ' Happened');
    // });

    this.testListener = (MCamera as any)
      .addListener('posedetected', (info: any) => {
        console.log(JSON.stringify(info));
        // this.answer = eventData.value;
      });
  }

  // MyPlugin.addListener('myPluginEvent', (info: any) => {
  //   console.log('myPluginEvent was fired');
  // });

  async testWebPlugin() {
    // CameraPreview.start(cameraPreviewOptions);
    MCamera.showCamera({ lineColor: '000000' });
    // this.answer = '69';
  }
}

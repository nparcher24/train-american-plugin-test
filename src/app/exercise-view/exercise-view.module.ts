import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseViewPageRoutingModule } from './exercise-view-routing.module';

import { ExerciseViewPage } from './exercise-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciseViewPageRoutingModule
  ],
  declarations: [ExerciseViewPage]
})
export class ExerciseViewPageModule {}

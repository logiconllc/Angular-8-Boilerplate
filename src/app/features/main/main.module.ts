import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [MainComponent, ContentComponent, AboutComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }

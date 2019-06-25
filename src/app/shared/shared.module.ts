import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';

const ANGULAR_MATERIAL = [
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ANGULAR_MATERIAL
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FlexLayoutModule,
    RouterModule,
    ANGULAR_MATERIAL
  ]
})
export class SharedModule {
}

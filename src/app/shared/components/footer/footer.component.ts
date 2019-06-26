import { Component, OnInit } from '@angular/core';
import {APP_VERSION} from '../../../shared/helper/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  AppVersion = APP_VERSION;

  constructor() { }

  ngOnInit() {
  }

}

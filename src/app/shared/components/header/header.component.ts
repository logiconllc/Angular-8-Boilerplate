import { Component, OnInit } from '@angular/core';
import {APP_NAME} from '../../../shared/helper/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName = APP_NAME;

  constructor() { }

  ngOnInit() {
  }

}

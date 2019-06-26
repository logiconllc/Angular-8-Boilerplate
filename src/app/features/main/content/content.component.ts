import { Component, OnInit } from '@angular/core';
import {SampleService} from '@core/services/sample.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private sampleService: SampleService) { }

  ngOnInit() {
    this.sampleService.getSampleData().subscribe(data => {
      console.log(data);
    });
  }

}

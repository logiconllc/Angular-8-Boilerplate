import { Component, OnInit } from '@angular/core';
import {SampleService} from '@core/services/sample.service';
import {SampleModel} from '@shared/models/sample.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public sampleModel: SampleModel;
  t = [1,2,3]

  constructor(private sampleService: SampleService) { }

  ngOnInit() {
    this.sampleService.getSampleData().subscribe(data => {
      this.sampleModel = data;
    });
  }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SampleModel} from '@shared/models/sample.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) {
  }

  getSampleData(): Observable<SampleModel> {
    let url: string = '/mock';
    return this.http.get<any>(url)
      .pipe(
        map((res: SampleModel) => {
          return res;
        })
      );
  }
}

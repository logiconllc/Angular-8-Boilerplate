import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  /**
   * The intercept method.
   *
   * @param {HttpRequest<any>} req The request.
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   * @memberof TokenInterceptor
   */

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      url: req.url.startsWith('/') ? environment.BASE_URL + req.url : req.url
    });
    return next.handle(authReq);
  }
}

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { departmentResponse } from '../mocks/departmentResponse.mock-data';

export class CallRequestServiceMockInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/departmentrequests')) {
      return of(new HttpResponse({ status: 200, body: departmentResponse, url: request.url }));
    }
    if (request.url.includes('/departmentrequests/') && request.method.toLowerCase() == 'delete') {
      debugger;
      return of(new HttpResponse({ status: 200, url: request.url }));
    } else {
      return next.handle(request);
    }
  }
}

import {
  throwError as observableThrowError,
  Observable
} from 'rxjs';
import { timeoutWith, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import * as _ from 'lodash';
import { AjaxConfigService } from './ajaxConfig.service';
import { APP_CONFIG } from '../../app.config';
import { ErrorConfig } from './errorConfig.service';

@Injectable({
  providedIn: 'root',
})
export class AjaxService {
  private httpTimeout: number = APP_CONFIG.httpTimeout;
  public authToken = null;

  constructor(
    private httpClient: HttpClient,
    private ajaxConfig: AjaxConfigService,
    private errorConfig: ErrorConfig
  ) { }

  private getServiceName(requestId: string): string {
    if (this.ajaxConfig.mode === this.ajaxConfig.serverStage[1]) {
      return this.ajaxConfig.urlConfiguration[requestId].Stage;
    } else if (this.ajaxConfig.mode === this.ajaxConfig.serverStage[2]) {
      return this.ajaxConfig.urlConfiguration[requestId].Production;
    } else {
      return this.ajaxConfig.urlConfiguration[requestId].Static;
    }
  }

  /* @name AjaxService#getURL
   * @methodOf AjaxService
   * @description Used to set the URL for Ajax request and return it
   */
  private getURL(requestId: string): string {
    const serviceName: string = this.getServiceName(requestId);

    if (serviceName === '') {
      return (
        this.ajaxConfig.baseURL[this.ajaxConfig.serverStage[0]] +
        this.ajaxConfig.urlConfiguration[requestId].Static
      );
    } else {
      return this.ajaxConfig.baseURL[this.ajaxConfig.mode] + serviceName;
    }
  }

  private getMethod(requestId: string): string {
    return this.ajaxConfig.mode === this.ajaxConfig.serverStage[0]
      ? 'GET'
      : this.ajaxConfig.urlConfiguration[requestId].Method;
  }



  apiToken() {
    // based on api name we can handle different api tokens
    return this.authToken !== null ? this.authToken : '';

  }
  private getHeader(): any {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache,no-store')
      .set('token', this.authToken !== null ? this.authToken : '');

    return headers;
  }

  private setRequestData(request: any, data: any, method: string) {
    if (data && method === 'POST') {
      data = JSON.stringify(data); // check this later point stringyfy twice
      data = JSON.stringify(data);
    }

    if (method === 'GET') {
      request.params = new HttpParams({
        fromString: data,
      });
    } else {
      request.body = data;
    }
  }
  public makeServiceRequest(requestId: string, data: any): Observable<any> {
    const url = this.getURL(requestId);
    const method = this.getMethod(requestId);

    const request = {
      headers: this.getHeader(),
      body: null,
      params: null,
      observe: 'body' as any,
    };

    this.setRequestData(request, data, method);

    return this.httpClient.request(method, url, request).pipe(
      timeoutWith(
        this.httpTimeout,
        observableThrowError(new Error('Http Timeout exceeds'))
      ),
      map((response: any) => this.handleSuccess(response)),
      catchError((error: HttpErrorResponse) =>
        this.handleError(error)
      )
    );
  }

  private handleSuccess(response: any): Observable<any> {
    if (response.ResponseStatus === 'Success') {
      return response;
    } else {
      this.errorConfig.showMessage(response.ResponseMessage);
      return response;
    }
  }

  private handleError(error: any): Observable<any> {
    if (error) {
      this.errorConfig.showMessage('2');
    }
    throw error;
  }

  // to read data form JSON file
  public getAPICacheData(requestId: string, data: any): Observable<any> {
    const url = this.getURL(requestId);
    return this.makeServiceRequest(requestId, data);
  }
}

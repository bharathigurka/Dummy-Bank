import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorConfig } from 'src/app/core/services/errorConfig.service';
import { AjaxService } from '../../core/services/ajaxService.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(
    private ajaxservice: AjaxService,
    private errorConfig: ErrorConfig
  ) {}
  public getTransactionApiData(): Observable<any> {
    return this.ajaxservice.getAPICacheData('TransactionDataList', '').pipe(
      map(
        (res) => {
          return res;
        },
        (error) => {
          return false;
        }
      ),
      catchError((err) => {
        // error msg with popup modal
        this.errorConfig.showMessage(100);
        return err;
      })
    );
  }
}

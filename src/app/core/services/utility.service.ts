import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  private modelAlertEvent = new Subject<any>();
  public modelAlertEventObservable = this.modelAlertEvent.asObservable();
  constructor() {}

  alertMsg(title: string, message: string, type: string) {
    const reqObj = {
      title,
      message,
      type,
    };
    setTimeout(() => {
      this.modelAlertEvent.next(reqObj);
    }, 0);
  }
}

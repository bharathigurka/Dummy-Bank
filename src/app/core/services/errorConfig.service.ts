import { Injectable } from '@angular/core';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorConfig {
  /**
   * added support for API Failure Error codes
   */
  public APP_ERROR_CODE: any = {
    100: {
      type: 'error',
      title: 'error_generic_failure',
      message:
        'Due to technical difficulties, we are unable to process your request now',
    },
  };

  constructor(private utilitySer: UtilityService) {}

  showMessage(id) {
    const title = this.getTitle(id);
    const message = this.getMessage(id);
    const type = this.getType(id);

    if (message) {
      this.utilitySer.alertMsg(title, message, type);
    }
  }

  getTitle(id) {
    let title = '';
    if (this.APP_ERROR_CODE[id]) {
      title = this.APP_ERROR_CODE[id].title;
    } else {
      return null;
    }
    return title;
  }

  getMessage(id) {
    let message = '';
    if (this.APP_ERROR_CODE[id]) {
      message = this.APP_ERROR_CODE[id].message;
    } else {
      return null;
    }
    return message;
  }

  getType(id) {
    if (this.APP_ERROR_CODE[id]) {
      return this.APP_ERROR_CODE[id].type;
    } else {
      return null;
    }
  }
}

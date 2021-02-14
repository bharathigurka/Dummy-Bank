import { of as observableOf, Observable } from 'rxjs';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ErrorConfig } from '../services/errorConfig.service';
import { UtilityService } from '../services/utility.service';
declare var window: any;

describe('Service: ErrorConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        ErrorConfig,
        {
          provide: UtilityService,
          useValue: {
            alertMsg: () => {
              // don't do anything
            },
            // modelEventCallback: observableOf(true),
          },
        },
      ],
    });
  });

  it(`ErrorConfigService getTitle method `, inject(
    [ErrorConfig, UtilityService],
    (errorConfigService, utilityService) => {
      errorConfigService.APP_ERROR_CODE = {
        100: {
          type: 'error',
          title: 'error_generic_failure',
          message: 'errorMessage',
        },
      };
      const output = errorConfigService.getTitle('100');
      expect(output).not.toBe(null);
    }
  ));

  it(`ErrorConfigService getMessage method `, inject(
    [ErrorConfig, UtilityService],
    (errorConfigService, utilityService) => {
      errorConfigService.APP_ERROR_CODE = {
        100: {
          type: 'error',
          title: 'error_generic_failure',
          message: 'errorMessage',
        },
      };
      const output = errorConfigService.getMessage('100');
      expect(output).not.toBe(null);
    }
  ));
  it(`ErrorConfigService getType method `, inject(
    [ErrorConfig, UtilityService],
    (errorConfigService, utilityService) => {
      errorConfigService.APP_ERROR_CODE = {
        100: {
          type: 'error',
          title: 'error_generic_failure',
          message: 'errorMessage',
        },
      };
      const output = errorConfigService.getType('100');
      expect(output).not.toBe(null);
    }
  ));
  it(`ErrorConfigService showMessage method `, inject(
    [ErrorConfig, UtilityService],
    (errorConfigService, utilityService) => {
      errorConfigService.APP_ERROR_CODE = {
        100: {
          type: 'error',
          title: 'error_generic_failure',
          message: 'errorMessage',
        },
      };
      utilityService.alertMsg = (param1, param2, param3) => {
        return true;
      };
      errorConfigService.getTitle = (param1) => {
        return 'title';
      };
      errorConfigService.getMessage = (param1) => {
        return 'success';
      };
      errorConfigService.getType = (param1) => {
        return 'error';
      };
      errorConfigService.showMessage('100');
      expect(errorConfigService.showMessage).not.toBe(null);
    }
  ));
});

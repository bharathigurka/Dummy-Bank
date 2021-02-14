import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from '../services/ajaxService.service';
import { AjaxConfigService } from '../services/ajaxConfig.service';
import { UtilityService } from '../services/utility.service';
import { ErrorConfig } from '../services/errorConfig.service';

describe('Service: AjaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AjaxService,
        {
          provide: AjaxConfigService,
          useValue: {
            serverStage: ['static', 'stage', 'prod', 'uat'],
            urlConfiguration: {
              TransactionDataList: {
                Stage: '',
                Production: '',
                Static: 'transactions.json',
                Method: 'GET',
              },
            },
            baseURL: {
              static: './assets/mock-data/' as string,
              stage: 'Stage URL' as string,
              prod: 'Prod URL' as string,
              uat: 'UAT URL' as string,
            },
          },
        },
        { provide: UtilityService, useValue: {} },
        { provide: ErrorConfig, useValue: {} },
      ],
    });
  });

  it(`AjaxService getURL method Static URL`, inject(
    [AjaxService, AjaxConfigService, UtilityService],
    (ajaxService, ajaxConfig) => {
      ajaxConfig.mode = 'static';
      const output = ajaxService.getAPICacheData('TransactionDataList');
      expect(output).not.toBe(null);
    }
  ));
  it(`AjaxService getURL method Stage URL`, inject(
    [AjaxService, AjaxConfigService, UtilityService],
    (ajaxService, ajaxConfig) => {
      ajaxConfig.mode = 'stage';
      const output = ajaxService.getAPICacheData('TransactionDataList');
      expect(output).not.toBe(null);
    }
  ));
  it(`AjaxService getURL method Production URL`, inject(
    [AjaxService, AjaxConfigService, UtilityService],
    (ajaxService, ajaxConfig) => {
      ajaxConfig.mode = 'prod';
      const output = ajaxService.getAPICacheData('TransactionDataList');
      expect(output).not.toBe(null);
    }
  ));

  it(`AjaxService handleAuthSuccess method`, inject(
    [AjaxService, AjaxConfigService, UtilityService],
    (ajaxService) => {
      const output = ajaxService.apiToken();
      expect(output).not.toBe(null);
    }
  ));
  it(`AjaxService handleAuthSuccess method else part`, inject(
    [AjaxService, ErrorConfig, UtilityService],
    (ajaxService, errorConfig) => {
      errorConfig.showMessage = () => {
        return true;
      };
      const output = ajaxService.apiToken();
      expect(output).not.toBe(null);
    }
  ));
  it(`AjaxService handleSuccess method`, inject(
    [AjaxService, ErrorConfig, UtilityService],
    (ajaxService, errorConfig) => {
      const res = {
        ResponseStatus: 'Success',
      };
      errorConfig.showMessage = () => {
        return true;
      };
      const output = ajaxService.handleSuccess(res, 'TransactionDataList');
      expect(output).not.toBe(null);
    }
  ));
  it(`AjaxService handleSuccess method else part`, inject(
    [AjaxService, ErrorConfig, UtilityService],
    (ajaxService, errorConfig) => {
      const res = {
        ResponseStatus: 'Failure',
        ResponseMessage: 'error',
      };
      errorConfig.showMessage = () => {
        return true;
      };
      const output = ajaxService.handleSuccess(res, 'TransactionDataList');
      expect(output).not.toBe(null);
    }
  ));
  it(`AjaxService setRequestData method`, inject(
    [AjaxService, ErrorConfig, UtilityService],
    (ajaxService) => {
      const req = {
        body: null,
        HttpHeaders: {},
        observe: 'body',
        params: null,
      };
      const output = ajaxService.setRequestData(req, '', 'POST');
      expect(output).not.toBe(null);
    }
  ));
});

import { TestBed, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AjaxConfigService } from '../services/ajaxConfig.service';

describe('AjaxConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [],
    });
  });
  it(`AjaxConfigService API `, inject(
    [AjaxConfigService],
    (ajaxConfigService) => {
      expect(ajaxConfigService.serverStage).not.toBe(null);
      expect(ajaxConfigService.mode).not.toBe(null);
    }
  ));
});

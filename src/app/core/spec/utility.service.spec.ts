import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { TestBed, inject } from '@angular/core/testing';
import { UtilityService } from '../services/utility.service';

describe('InnovationHubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
    });
  });

  it('UtilityService calling alertMsg method', inject(
    [UtilityService],
    (utilityService) => {
      utilityService.alertMsg('Error', 'Success');
      expect(utilityService.alertMsg).not.toBe(null);
    }
  ));
});

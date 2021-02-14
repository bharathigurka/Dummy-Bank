import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of as observableOf, Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { DatePipe } from '@angular/common';
import { TransactionService } from '../shared/services/transaction.service';

describe('HomeComponent', () => {
  let component: any;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [
        {
          provide: DatePipe,
          useValue: {
            transform: () => {
              return true;
            },
          },
        },
        {
          provide: TransactionService,
          useValue: {
            getTransactionApiData: () => {
              return observableOf(true);
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('to check ngOnInit is called ', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
  it('to check openReviewPopup is called ', () => {
    spyOn(component, 'openReviewPopup').and.callThrough();
    component.openReviewPopup();
    expect(component.openReviewPopup).toHaveBeenCalled();
  });
  it('to check closeReview is called when click close', () => {
    spyOn(component, 'closeReview').and.callThrough();
    component.closeReview('Close');
    expect(component.closeReview).toHaveBeenCalled();
  });
  it('to check getSubmitedDetails is called ', () => {
    component.merchantDetail = {
      Amount: '700',
      FromAccount: 'My Personal Account: €5824.76',
      ToAccount: 'Backbase',
    };
    spyOn(component, 'getSubmitedDetails').and.callThrough();
    component.getSubmitedDetails(component.merchantDetail);
    expect(component.getSubmitedDetails).toHaveBeenCalled();
  });
  it('to check getRandomColor is called ', () => {
    spyOn(component, 'getRandomColor').and.callThrough();
    component.getRandomColor();
    expect(component.getRandomColor).toHaveBeenCalled();
  });
  it('to check getTransactionData is called ', () => {
    component.merchantDetail = {
      Amount: '700',
      FromAccount: 'My Personal Account: €5824.76',
      ToAccount: 'Backbase',
    };
    component.transactionSubmit = {
      categoryCode: '#12a580',
      dates: {
        valueDate: 1600493600000,
      },
      transaction: {
        amountCurrency: {
          amount: component.merchantDetail.Amount,
          currencyCode: 'EUR',
        },
        type: 'Salaries',
        creditDebitIndicator: 'CRDT',
      },
      merchant: {
        name: component.merchantDetail.ToAccount,
        accountNumber: component.merchantDetail.FromAccount,
      },
    };
    spyOn(component, 'getTransactionData').and.callThrough();
    component.getTransactionData();
    expect(component.getTransactionData).toHaveBeenCalled();
  });
  it('to check getFilterData is called ', () => {
    spyOn(component, 'getFilterData').and.callThrough();
    component.getFilterData('');
    expect(component.getFilterData).toHaveBeenCalled();
  });
});

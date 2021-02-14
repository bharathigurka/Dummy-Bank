import { inject, TestBed } from '@angular/core/testing';
import { of as observableOf } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { TransactionService } from './transaction.service';
import { AjaxService } from 'src/app/core/services/AjaxService.service';
const value = [
  {
    categoryCode: '#12a580',
    dates: {
      valueDate: 1600493600000,
    },
    transaction: {
      amountCurrency: {
        amount: 5000,
        currencyCode: 'EUR',
      },
      type: 'Salaries',
      creditDebitIndicator: 'CRDT',
    },
    merchant: {
      name: 'Backbase',
      accountNumber: 'SI64397745065188826',
    },
  },
];

describe('TransactionService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: AjaxService,
          useValue: {
            getAPICacheData: () => {
              return observableOf(value);
            },
          },
        },
      ],
    })
  );
  it('Transaction Service method failure', inject(
    [TransactionService, AjaxService],
    (transactionService, ajaxService) => {
      ajaxService.getAPICacheData = () => {
        return observableOf(false);
      };
      transactionService.getTransactionApiData().subscribe((response) => {
        expect(response).toBe(false);
      });
    }
  ));
  it('Transaction Service method success', inject(
    [TransactionService, AjaxService],
    (transactionService, ajaxService) => {
      ajaxService.getAPICacheData = () => {
        return observableOf(value);
      };
      transactionService.getTransactionApiData().subscribe((response) => {
        expect(response).toBe(value);
      });
    }
  ));
});

import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TransactionService } from '../shared/services/transaction.service';
import { FormCardComponent } from '../shared/components/form-card/form-card.component';
import { APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DatePipe],
})
export class HomeComponent implements OnInit {
  @ViewChild(FormCardComponent) formCard: FormCardComponent;
  public amountType;
  public minus = '-';
  private submittedFormData: any;
  public showReviewPopup: any = false;
  private searchContent;
  private search: any = '';
  public merchantDetail: any;
  private randomClr;
  public transactionData;
  private transactionSubmit;
  private myDate: any = new Date();
  public formValuesAvail = false;
  submitted = false;
  constructor(
    private datePipe: DatePipe,
    private tranServ: TransactionService
  ) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
  getSubmitedDetails(event) {
    if (event) {
      this.openReviewPopup();
      this.merchantDetail = event;
    }
  }
  ngOnInit() {
    this.amountType = APP_CONFIG.amountType[1];
    this.tranServ.getTransactionApiData().subscribe((res) => {
      this.transactionData = res.data;
      this.submittedFormData = this.transactionData;
    });
  }
  openReviewPopup() {
    this.showReviewPopup = true;
  }
  closeReview(event) {
    if (event === 'Send') {
      this.formCard.updateData();
      this.getRandomColor();
      this.getTransactionData();
      if (this.transactionSubmit && this.search === '') {
        this.transactionData.push(this.transactionSubmit);
      } else if (this.transactionSubmit && this.search !== '') {
        this.transactionData.push(this.transactionSubmit);
        this.getFilterData(this.search);
      }
      this.formCard.resetForm();
    } else if (event === 'Close') {
    }
    this.showReviewPopup = false;
  }
  getRandomColor() {
    this.randomClr = Math.floor(Math.random() * 16777215).toString(16);
  }
  getTransactionData() {
    this.transactionSubmit = {
      categoryCode: '#' + this.randomClr,
      dates: { valueDate: this.myDate },
      transaction: {
        amountCurrency: {
          amount: this.merchantDetail.Amount,
          currencyCode: 'EUR',
        },
        type: 'Transaction',
        creditDebitIndicator: 'DBIT',
      },
      merchant: {
        name: this.merchantDetail.ToAccount,
        accountNumber: this.merchantDetail.FromAccount,
      },
    };
  }
  getFilterData(data) {
    this.search = data;
    this.searchContent = this.transactionData;
    if (this.search === '') {
      this.transactionData = this.submittedFormData;
      this.search = '';
    } else {
      if (this.search) {
        this.searchContent = this.searchContent.filter((ele) => {
          const arrayelement = ele.merchant.name.toLowerCase();
          return arrayelement.includes(data);
        });
      }
      this.transactionData = this.searchContent;
    }
  }
}

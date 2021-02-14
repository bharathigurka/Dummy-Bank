import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewPopupComponent } from './models/reviewPopup/review-popup.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { FilterComponent } from './components/filter/filter.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { FormCardComponent } from './components/form-card/form-card.component';
import { NumberFormatPipe } from './pipe/symbol.pipe';
import { ModalalertComponent } from './models/modalalert/modalalert.component';

const COMPONENTS = [
  ReviewPopupComponent,
  FooterComponent,
  LogoComponent,
  SubmitButtonComponent,
  FilterComponent,
  TransactionItemComponent,
  FormCardComponent,
  NumberFormatPipe,
  ModalalertComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: COMPONENTS,
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BbUIModule {}

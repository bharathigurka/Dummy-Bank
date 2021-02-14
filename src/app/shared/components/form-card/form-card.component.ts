import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss'],
})
export class FormCardComponent implements OnInit {
  @Input() clickType;
  public limitBal;
  @Output() submitedFormDetails = new EventEmitter();
  public registerForm: FormGroup;
  public FromAccountValue;
  public formValuesAvail = false;
  private balance: number = 5824.76;
  private FromAccountText: any = 'My Personal Account: €';
  private minAmount: number = 0.1;
  private formObject = {
    FromAccount: '',
    ToAccount: '',
    Amount: '',
  };
  submitted = false;
  constructor(private form: FormBuilder) {}
  transferData(event: Event): void {
    this.submitedFormDetails.emit(event);
  }
  ngOnInit() {
    this.getFormGroup();
    this.FromAccountValue = this.FromAccountText + this.balance;
  }
  updateData() {
    this.balance = this.balance - this.registerForm.value.Amount;
    this.limitBal = this.balance;
    this.FromAccountValue = this.FromAccountText + this.balance;
  }
  getFormGroup() {
    this.limitBal = this.balance;
    this.registerForm = this.form.group({
      FromAccount: [this.balance],
      ToAccount: [this.formObject.ToAccount, [Validators.required]],
      Amount: [
        this.formObject.Amount,
        [
          Validators.required,
          Validators.min(this.minAmount),
          Validators.pattern('^[0-9.]*$'),
          this.minBalanceCheck(),
        ],
      ],
    });
  }
  minBalanceCheck() {
    return (control: FormControl) => {
      // to get limit after debit
      const limit = this.limitBal - control.value;
      if (limit <= 500) {
        return { limitError: true };
      }
      return null;
    };
  }
  resetForm() {
    this.submitted = false;
    this.registerForm.reset();
    this.FromAccountValue = this.FromAccountText + this.balance;
  }
  formValidationCheck() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.transferData(this.registerForm.value);
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormCardComponent } from './form-card.component';
import { FormBuilder, FormGroup } from '@angular/forms';

describe('FormCardComponent', () => {
  let component: any;
  let fixture: ComponentFixture<FormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FormCardComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCardComponent);
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
  it('to check transferData is called ', () => {
    spyOn(component, 'transferData').and.callThrough();
    const formObject = {
      FromAccount: 'My Personal Account:$5824.76',
      ToAccount: 'bh',
      Amount: '1',
    };
    component.transferData(formObject);
    expect(component.transferData).toHaveBeenCalled();
  });
  it('to check updateData is called ', () => {
    spyOn(component, 'updateData').and.callThrough();
    component.updateData();
    expect(component.updateData).toHaveBeenCalled();
  });
  it('to check getFormGroup is called ', () => {
    spyOn(component, 'getFormGroup').and.callThrough();
    component.getFormGroup();
    expect(component.getFormGroup).toHaveBeenCalled();
  });
  it('to check minBalanceCheck is called ', () => {
    spyOn(component, 'minBalanceCheck').and.callThrough();
    component.minBalanceCheck();
    expect(component.minBalanceCheck).toHaveBeenCalled();
  });
  it('to check resetForm is called ', () => {
    spyOn(component, 'resetForm').and.callThrough();
    component.resetForm();
    expect(component.resetForm).toHaveBeenCalled();
  });
  it('to check formValidationCheck is called ', () => {
    spyOn(component, 'formValidationCheck').and.callThrough();
    component.formValidationCheck();
    expect(component.formValidationCheck).toHaveBeenCalled();
  });
  it('to check formValidationCheck else case is called ', () => {
    component.registerForm = {
      invalid: false,
    };
    spyOn(component, 'formValidationCheck').and.callThrough();
    component.formValidationCheck();
    expect(component.formValidationCheck).toHaveBeenCalled();
  });
});

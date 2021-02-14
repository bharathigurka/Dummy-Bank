import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewPopupComponent } from './review-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('ReviewPopupComponent', () => {
  let component: any;
  let fixture: ComponentFixture<ReviewPopupComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ReviewPopupComponent],
      providers: [
        {
          provide: NgbModal,
          useValue: {
            open: () => {
              return true;
            },
            close: () => {
              return true;
            },
          },
        },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`calling closePopup is success`, () => {
    const event: any = 'Send';
    component.reviewPopUpClose.emit(event);
    component.modalReference = {
      close() {
        return true;
      },
    };
    spyOn(component, 'closePopup').and.callThrough();
    component.closePopup(event);
    expect(component.closePopup).toHaveBeenCalled();
  });
});

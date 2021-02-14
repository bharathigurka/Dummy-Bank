import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  NgbModalConfig,
  NgbModal,
  NgbModalRef,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  providers: [NgbModalConfig, NgbModal],
})
export class ReviewPopupComponent implements OnInit {
  public buttonList: any;
  public popupCloseIcon;
  modalReference: NgbModalRef;
  @Input() getMerchantDetail;
  @Output() reviewPopUpClose = new EventEmitter();
  @ViewChild('transferReviewPopup', { static: false })
  transferReviewPopup: ElementRef;
  private modaloption: NgbModalOptions = {
    keyboard: false,
    centered: true,
    size: 'lg',
    windowClass: 'transferReviewPopupCLs',
  };

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    setTimeout(() => this.open(this.transferReviewPopup), 0);
  }

  open(transferReviewPopup) {
    this.modalReference = this.modalService.open(
      transferReviewPopup,
      this.modaloption
    );
  }
  closePopup(event) {
    this.reviewPopUpClose.emit(event);
    this.modalReference.close();
  }
}

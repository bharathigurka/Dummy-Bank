import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UtilityService } from 'src/app/core/services/utility.service';

@Component({
  selector: 'app-modalalert',
  templateUrl: './modalalert.component.html',
  styleUrls: ['./modalalert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalalertComponent implements OnInit {
  public modalAlertsubscribe;
  public title;
  public message;
  public type;
  private modalAlertRef;
  @ViewChild('alertCompRef', { static: false })
  alertCompref: ElementRef;

  private modaloption: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false,
    centered: true,
    size: 'sm',
    windowClass: 'errorPopup',
  };
  constructor(
    private utilityService: UtilityService,
    private modalinstance: NgbModal
  ) {}

  ngOnInit() {
    this.modalAlertsubscribe = this.utilityService.modelAlertEventObservable.subscribe(
      (resObj: any) => {
        this.type = resObj.type;
        this.title = resObj.title;
        this.message = resObj.message;
        this.modalinstance.dismissAll();
        this.modalAlertRef = this.modalinstance.open(
          this.alertCompref,
          this.modaloption
        );
      }
    );
  }
  closePopup() {
    this.modalinstance.dismissAll();
  }
}

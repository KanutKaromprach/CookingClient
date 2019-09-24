import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-cooking-modal',
  templateUrl: './cooking-modal.component.html',
  styleUrls: ['./cooking-modal.component.scss'],
})
export class CookingModalComponent implements OnInit {
  @Input() name: string;
  @Input() quantity: number;
  @Input() warning: string;
  @Input() lost: number;

  constructor(private modalCtrl: ModalController, public navParams: NavParams) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}

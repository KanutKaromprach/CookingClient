import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cooking-detail',
  templateUrl: './cooking-detail.component.html',
  styleUrls: ['./cooking-detail.component.scss'],
})
export class CookingDetailComponent implements OnInit {

  type: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
  }

}

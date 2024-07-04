import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  host: { '[@fadeInAnimation]': '' }
})
export class ErrorComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

  }
}
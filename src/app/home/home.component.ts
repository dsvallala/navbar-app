import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  code_error(): void {
    throw new Error("testing code error");
  }

  nav_error(): void {
    this.router.navigateByUrl('/this_page_does_not_exist');
  }
}

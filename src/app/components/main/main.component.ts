import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  title = 'Admin Panel';
  isDrawerOpen = false;
  date = new Date('DD-MM-YYYY');
  constructor(private router: Router) {}

  toggleDrawer = () => {
    this.isDrawerOpen = !this.isDrawerOpen;
  };

  logOut = () => {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  };
}

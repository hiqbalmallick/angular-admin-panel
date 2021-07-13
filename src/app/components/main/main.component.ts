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
  constructor(private httpClient: HttpClient, private router: Router) {}

  toggleDrawer = () => {
    this.isDrawerOpen = !this.isDrawerOpen;
  };

  onSubmit = (v: NgForm) => {
    if (v.form.status === 'VALID') {
      const data: any[] =
        JSON.parse(localStorage.getItem('userList') as string) || [];
      const {
        form: {
          value: { email, name, phone, website },
        },
      } = v;
      const user = { email, name, phone, website };
      this.httpClient
        .post(`https://jsonplaceholder.typicode.com/users`, user)
        .subscribe((data: any) => {});
      localStorage.setItem('userList', JSON.stringify(data));
    }
  };

  logOut = () => {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  };
}

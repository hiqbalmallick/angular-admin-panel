import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}
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
}

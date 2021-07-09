import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  title = 'Admin Panel';
  isDrawerOpen = false;
  date = new Date('DD-MM-YYYY');

  toggleDrawer = () => {
    this.isDrawerOpen = !this.isDrawerOpen;
  };

  onSubmit = (v: NgForm) => {
    if (v.form.status === 'VALID') {
      const data: any[] =
        JSON.parse(localStorage.getItem('userList') as string) || [];
      const {
        form: {
          value: { position, name, weight, symbol },
        },
      } = v;
      data.push({ position, name, weight, symbol });
      localStorage.setItem('userList', JSON.stringify(data));
    }
  };
}

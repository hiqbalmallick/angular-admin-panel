import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  title = 'Admin Panel';
  isDrawerOpen = false;
  date = new Date('DD-MM-YYYY');
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [];

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('userList') as string) || [];
    this.dataSource = [...data];
  }

  toggleDrawer = () => {
    this.isDrawerOpen = !this.isDrawerOpen;
  };

  onSubmit = (v: NgForm) => {
    console.log(`v`, v);
  };
}

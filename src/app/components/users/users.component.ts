import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

export interface PeriodicElement {
  name: string;
  email: string;
  phone: number;
  website: string;
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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  onSubmit = (v: NgForm) => {
    console.log(`v`, v);
  };

  getAllUsers = async () => {
    await this.userService
      .getAllUsers()
      .subscribe((data: PeriodicElement[]) => {
        this.dataSource = [...data];
      });
  };

  setSelectedUser = (item: PeriodicElement) => {
    this.userService.selectedUser(item);
  };
}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Admin Panel';
  isDrawerOpen = false;
  date = new Date('DD-MM-YYYY');

  toggleDrawer = () => {
    this.isDrawerOpen = !this.isDrawerOpen;
  };
}

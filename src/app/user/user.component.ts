import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummer-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
}

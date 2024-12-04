import { Component, Input, input, computed, Output, output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Examples of using signals.
  // name = input.required<string>();
  // avatar = input.required<string>();
  // imagePath = computed(() => {
  //   return "assets/users/" + this.avatar()
  // });
  // select = output<string>(); // This is not a signal but looks like it.

  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return "assets/users/" + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}

import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LoginComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {}

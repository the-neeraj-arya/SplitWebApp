import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SplitGroupComponent } from './split/split-group/split-group.component';
import { SignupComponent } from './user/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, UserComponent, LoginComponent, MatButtonModule,
    MatIconModule, MatDividerModule, RouterModule, SplitGroupComponent, SignupComponent,
    HttpClientModule, NgFor, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SplitWebApp';
}

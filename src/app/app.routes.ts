import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { SplitComponent } from './split/split.component';
import { SplitGroupComponent } from './split/split-group/split-group.component';
import { SplitGroupMemberComponent } from './split/split-group-member/split-group-member.component';
import { HomeComponent } from './core/home/home.component';

export const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: 'home', component: HomeComponent }
];

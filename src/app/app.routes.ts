import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { SplitComponent } from './split/split.component';
import { SplitGroupComponent } from './split/split-group/split-group.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: UserComponent },
  { path: 'split', component: SplitComponent},
  { path: 'splitGroup', component: SplitGroupComponent}
];

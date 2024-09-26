import { Routes } from '@angular/router';
import { SplitComponent } from './split.component';
import { SplitGroupMemberComponent } from './split-group-member/split-group-member.component';
import { SplitGroupComponent } from './split-group/split-group.component';

export const routes: Routes = [
  {
    path: 'split',
    component: SplitComponent,
    children: [
      {
        path: 'splitGroup',
        component: SplitGroupComponent,
      },
      {
        path: 'splitGroupMember',
        // component: SplitGroupMemberComponent
        loadComponent: () => import('./split-group-member/split-group-member.component').then(c => c.SplitGroupMemberComponent),
      },
    ]
  }
];


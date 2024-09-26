import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-split-group-member',
  standalone: true,
  imports: [],
  templateUrl: './split-group-member.component.html',
  styleUrl: './split-group-member.component.scss',
  inputs:['parentData'],
})
export class SplitGroupMemberComponent {
  // @Input() parentData: any = '';
  parentData:any;

  constructor() { }

}

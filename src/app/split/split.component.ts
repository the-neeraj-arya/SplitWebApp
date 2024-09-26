import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SplitService } from './split.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { SplitGroupMemberComponent } from './split-group-member/split-group-member.component';

@Component({
  selector: 'app-split',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatDividerModule,
    CommonModule, RouterModule, SplitGroupMemberComponent],
  templateUrl: './split.component.html',
  styleUrl: './split.component.scss'
})
export class SplitComponent implements OnInit {

  message: any;
  errorMessage: any;
  groupsData: any[] = [];
  selectedGroup: string = '';

  constructor(private service: SplitService, private router: Router) {
  }

  ngOnInit() {
    this.service.getData().subscribe({
      next: (response) => {
        this.groupsData = response;
        console.log('API Response:', this.groupsData);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.errorMessage = 'Error fetching data !';
      },
    });
  }

  onRowClick(group: any) {
    this.selectedGroup = "Hello i am your parent";
    this.router.navigate(['/split/splitGroupMember']);
  }
}

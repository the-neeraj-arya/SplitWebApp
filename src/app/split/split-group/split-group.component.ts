import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SplitService } from '../split.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-split-group',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './split-group.component.html',
  styleUrl: './split-group.component.scss',
})
export class SplitGroupComponent implements OnInit {
  errorMessage: String = '';
  noerror: boolean = false;
  SplitGroupDetails!: FormGroup;
  groupName: String = '';
  groupDesc: String = '';
  memberSlabs: number = 0;
  memberName: String = '';
  groupDataMap: Map<number, String> = new Map();
  groupMemberData: { memberName: String }[] = [];
  groupTableDisable: boolean = false;
  members: number = 0;

  constructor(
    private formbuilder: FormBuilder,
    private splitService: SplitService
  ) { }

  ngOnInit(): void {
    this.SplitGroupDetails = this.formbuilder.group({
      groupName: ['', Validators.required],
      groupDesc: ['', Validators.required],
      memberSlabs: ['', Validators.required],
      memberName: ['', Validators.required],
    });
  }

  onGroupMember() {
    if (this.memberSlabs > 1) {
      this.groupTableDisable = true;
      this.noerror = false;
    } else {
      this.noerror = true;
      this.errorMessage = 'Group member should be grater than 1.';
      return;
    }
  }

  membSlabRowsArray(): number[] {
    return Array(this.memberSlabs).fill(0);
  }

  onBlurMemberName(rowIndex: number) {
    this.groupDataMap.set(
      rowIndex + 1,
      this.SplitGroupDetails.controls['memberName'].value
    );
    console.log(this.groupDataMap);
  }

  onSubmit() {
    this.errorMessage = '';
    if (this.SplitGroupDetails.controls['groupName'].value == '') {
      this.noerror = true;
      this.errorMessage = 'Group name should not be blank.';
      return;
    }
    if (this.SplitGroupDetails.controls['groupDesc'].value == '') {
      this.noerror = true;
      this.errorMessage = 'Group description should not be blank.';
      return;
    }
    if (this.SplitGroupDetails.controls['memberSlabs'].value < 2) {
      this.noerror = true;
      this.errorMessage = 'Group members should be grater than 1.';
      return;
    }
    if (this.SplitGroupDetails.controls['memberName'].value == '') {
      this.noerror = true;
      this.errorMessage = 'Group members name should not be blank.';
      return;
    }

    for (const [key, value] of this.groupDataMap.entries()) {
      this.groupMemberData.push({ memberName: value });
    }
    console.log(this.groupMemberData);

    const splitGroupDetailData: { [key: string]: any } = {
      groupName: this.SplitGroupDetails?.controls['groupName'].value,
      groupDesc: this.SplitGroupDetails?.controls['groupDesc'].value,
      memberSlabs: this.SplitGroupDetails?.controls['memberSlabs'].value,
      groupMembers: this.groupMemberData,
    };

    console.log(splitGroupDetailData);

    this.splitService.saveSplitGroupData(splitGroupDetailData).subscribe({
      next: (response) => {
        this.noerror = true;
        this.errorMessage = 'Post request successful!';
        console.log('Post request successful!', response);
      },
      error: (error) => {
        this.noerror = true;
        this.errorMessage = 'Error occurred while posting data:';
        console.error('Error occurred while posting data:', error);
      }
    });
  }

  onReset() {
    this.noerror = false;
    this.errorMessage = '';
    this.memberSlabs = 0;
    this.groupTableDisable = false;
    this.ngOnInit();
    this.membSlabRowsArray();
  }
}

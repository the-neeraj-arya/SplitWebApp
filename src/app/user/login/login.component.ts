import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { SplitService } from '../../split/split.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private baseUrl = 'http://localhost:8080/';
  message: any

  constructor(private http: HttpClient, private splitService: SplitService) { }

  ngOnInit(): void {

    // this.splitService.getData().subscribe(
    //   data =>
    //     this.message = data
    // );
  }
}

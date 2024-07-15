import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SplitService } from './split.service';

@Component({
  selector: 'app-split',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './split.component.html',
  styleUrl: './split.component.scss'
})
export class SplitComponent implements OnInit {

  message: any;
  constructor(private service: SplitService) {
  }

  ngOnInit() {
    this.service.getData().subscribe(
      data =>
        this.message = data
    );

    console.log("message value", this.message);
  }
}

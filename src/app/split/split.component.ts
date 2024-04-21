import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-split',
  standalone: true,
  imports: [RouterLink, MatButtonModule,MatIconModule,MatDividerModule],
  templateUrl: './split.component.html',
  styleUrl: './split.component.scss'
})
export class SplitComponent implements OnInit {

  constructor(){    
    console.log("This is constructor.");
  }

  ngOnChange(){
    console.log("This is ngOnChage");
  }

  ngOnInit(){
    console.log("This is ngOnInit");
  }

  ngDoCheck(){
    console.log("This is ngDoCheck");
  }
  ngOnDestroy(){
    console.log("This is ngOnDestroy");
  }

}

import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router, NavigationStart , NavigationEnd, NavigationCancel, NavigationError,Event  } from '@angular/router';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  color: ThemePalette = 'warn';
 ShowLoadIndcate:boolean = true;
  constructor(public loader:LoaderService ){
   }

  ngOnInit(): void {
  }

}

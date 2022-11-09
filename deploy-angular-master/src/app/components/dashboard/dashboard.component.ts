import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:any = {};

  constructor() { }

  ngOnInit(): void {
  }
}

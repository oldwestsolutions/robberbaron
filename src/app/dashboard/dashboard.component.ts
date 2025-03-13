import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userEmail: string = '';
  marketData: any = {
    btc: { price: '45000', change: '+2.5%' },
    eth: { price: '3200', change: '+1.8%' },
    spy: { price: '450', change: '-0.5%' }
  };

  constructor() { }

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail') || 'User';
  }
} 
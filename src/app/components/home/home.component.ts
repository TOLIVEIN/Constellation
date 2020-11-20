import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  public zodiac = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricornus',
    'Aquarius',
    'Pisces',
  ];

  constructor() {}

  ngOnInit(): void {
  }

  public cardClick(item: string): void {
    location.hash = item;
    console.log(item);
  }
}

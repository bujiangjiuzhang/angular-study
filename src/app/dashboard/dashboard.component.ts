import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private firstService: FirstService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.firstService.getHeros()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

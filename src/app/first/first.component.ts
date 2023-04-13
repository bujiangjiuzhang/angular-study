import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FirstService } from '../first.service';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  heros: Hero[] = [];

  heroSelect?: Hero;


  constructor(private http: HttpClient, private firstSetvice: FirstService, private messageService: MessageService) {

  }

  getFirstService() {
    this.firstSetvice.getHeros().subscribe((res) => {
      this.heros = res;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.firstSetvice.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heros = this.heros.filter(h => h !== hero);
    this.firstSetvice.deleteHero(hero.id).subscribe();
  }

  ngOnInit() {
    this.getFirstService()
  }
}

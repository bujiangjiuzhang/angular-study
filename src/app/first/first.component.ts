import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FirstService } from '../first.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  heros:Hero[] = [];

  heroSelect?: Hero

  constructor(private firstSetvice: FirstService, private messageService: MessageService) {

  }

  getFirstService() {
    this.firstSetvice.getHeros().subscribe((res) => {
      this.heros = res;
    });
  }

  ngOnInit() {
    this.getFirstService()
  }
}

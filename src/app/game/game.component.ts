import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  constructor() {}

  score = 0;
  money = 0;
  addPoints = 1;

  addScore = (scoreToAdd) => {
    this.score += scoreToAdd;
    this.money += scoreToAdd;
  };

  upgradeAddPoints = () => {
    this.addPoints++;
  };

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import { GetApiService } from 'src/app/services/get-all-games-service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  games: any[] = [];
  isLoading: boolean = true;
  iterationCount = 3;

  constructor(private _GetApiService: GetApiService) {}
  ngOnInit() {
    this._GetApiService.getSortedGames('popularity').subscribe({
      next: (res: any) => {
        this.isLoading = false;
        console.log(res);

        this.games = res.slice(0, 3);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
}

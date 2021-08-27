import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute} from '@angular/router';
import {Player} from '../../model/player';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: Player[] = [];
  id?: number;

  constructor(private playerService: PlayerService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.playerService.getAll().subscribe(data => {
      this.players = data;
      console.log(data);
    });
  }

}

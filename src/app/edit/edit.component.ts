import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../service/player.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl()
  });
  // @ts-ignore
  id: number;

  constructor(private playerService: PlayerService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // @ts-ignore
      this.id = +paramMap.get(`id`);
      this.getPlayer(this.id);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getPlayer(id: number) {
    this.playerService.findById(id).subscribe(data => {
      this.playerForm = new FormGroup({
        name: new FormControl(data.name),
        champ: new FormControl(data.champ),
        kda: new FormControl(data.kda),
        des: new FormControl(data.des)
      });
    });
  }

  // tslint:disable-next-line:typedef
  edit(id: number) {
    const player = this.playerForm.value;
    this.playerService.edit(id, player).subscribe(data => {
      console.log('Ok');
      this.router.navigate(['list']);
    });
  }

}

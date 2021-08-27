import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  API = `${environment.API}`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.API);
  }

  create(player: Player): Observable<Player> {
    return this.http.post<Player>(this.API, player);
  }

  edit(id: number, player: Player): Observable<Player> {
    return this.http.put<Player>(this.API + '/'  + id, player);
  }
  delete(id: number): Observable<Player> {
    return this.http.delete<Player>(this.API  + '/' + id);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, catchError, tap } from 'rxjs';
import { Hero } from './hero';
import { HttpErrorHandler } from './http-error-handler';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService extends HttpErrorHandler {
  private heroesUrl = 'http://localhost:8080/heroes';
  httpOptions: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private messagesService: MessagesService, private http: HttpClient) {
    super();
   }
  addHero(hero: Hero): Observable<any> {
    return this.http.post(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: any) => this.log(`New Hero ${newHero.id}`)),
        catchError(this.handleError<Hero>('New Hero'))
      );
  }
  updateHero(hero: Hero) {
    return this.http.put(`${this.heroesUrl}/${hero.id}`, hero, this.httpOptions).pipe(
      tap(_ => this.log(`update hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('updateHero', { id: 1, name: "estevan" }))
    )
  }
  delete(hero: Hero): Observable<any> {
    return this.http.delete(`${this.heroesUrl}/${hero.id}`)
      .pipe(
        tap(_ => this.log(`Hero deleted ${hero.name}`)),
        catchError(this.handleError('Hero deleted'))
      );
  }
  getHeroes(): Observable<any> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log("fetched heroes")),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`, { "id": 1, "name": "teste" }))
    )
  }
  getHeroWithAddresses(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}?projection=withAddresses`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`, { "id": 1, "name": "teste" }))
    )
  }
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<any> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<any>(`${this.heroesUrl}/search/findByName?name=${term}`).pipe(
      tap(x => x._embedded.heroes.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
  private log(message: string) {
    this.messagesService.add(`HeroService: ${message}`);
  }
}

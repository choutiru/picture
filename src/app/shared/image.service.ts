import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private query: string;
  private API_URL: string = environment.PIXABAY_API_URL;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage = '&per_page=10';

  constructor(private http: HttpClient) { }

  getImage(query){
    return this.http.get(this.URL + query + this.perPage)
    .pipe(map(res => res));
  }
}

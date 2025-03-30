import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  async getAllHousingLocations(): Promise<Observable<HousingLocation[]>> {
    return this.http.get<HousingLocation[]>(this.url);
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}

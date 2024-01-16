import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {paths} from "../config/config";

@Injectable({
  providedIn: 'root'

})
export class WeatherService {


  constructor(private http: HttpClient) {
  }


  getWeather(lat:number, long:number): Observable<any> {
    return this.http.get(`${paths.weather}?lat=${lat}&lon=${long}&appid=c77db93519429fc7bad7fdb7feb1c182&units=metric` )
  }

}

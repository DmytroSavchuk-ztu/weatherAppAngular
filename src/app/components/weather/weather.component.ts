import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getCoordinates()
  }

  weather: any;
  lat: any;
  long: any;
  iconPath = "https://openweathermap.org/img/wn/";
  showWeather:boolean = false;
  permissionGranted:any;

  getCoordinates() {
    const getUserLocation = navigator.geolocation;

    if (!getUserLocation) {
      this.permissionGranted = false
    } else {
      getUserLocation.getCurrentPosition((position) => {
        const {coords} = position;
        this.lat = coords.latitude;
        this.long = coords.longitude;
        this.permissionGranted = true
        this.getWeather()
      }, (error) => {
        console.log('Something went wrong getting your position!')
      })
    }
  }
  getWeather() {
    this.weatherService.getWeather(this.lat, this.long).subscribe((weather) => {
      this.weather = weather

      setTimeout(()=>{ this.showWeather = true},2000)


    })
  }

  protected readonly Math = Math;
}

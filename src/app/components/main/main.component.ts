import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent{

  alldata:any = [];
  Value:any = "1";
  filtered:any = [] 
  startDate: any;
  endDate: any;
  months:any = "";

  constructor(private Data:WeatherService){}

  ngOnInit(){
    this.Process();
    this.initialValues();
  }

  Process(){
  this.Data.users().subscribe((data)=>{
    this.alldata = data; 
    this.filterData();
    this.resetButton()
  }) 
  
  }

  filterData(){
      if (this.Value == 1) {
        if(this.startDate && this.endDate){
        this.filtered = this.alldata.filter((x:any) => {
          const date = new Date(x.date);
          const start = new Date(this.startDate);
          const end = new Date(this.endDate);
          return (date >= start && date <= end)
        });} 
        else (this.filtered = this.alldata)
      } else if (this.Value == 2) {
        if(this.months){
        this.filtered = this.alldata.filter((x: any) => {
          const currentmonth = new Date(x.date).getMonth() + 1;
          return currentmonth == this.months
        });} 
        else (this.filtered = this.alldata)
      } else {this.filtered = this.alldata}
    }
    resetButton(){
      console.log(this.filtered)
      this.filtered = this.alldata
      this.months = null
      this.startDate = null
      this.endDate = null
    }

    initialValues(){
      if (!this.startDate && !this.endDate){
        this.startDate = new Date(new Date().setDate(new Date().getDate() - 30)) 
        this.endDate = new Date ()
      }
      else if (!this.months){
        this.months = new Date().getMonth() + 1
      } 
      this.filterData();
    
    }
}
 
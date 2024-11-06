import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { WeatherComponent } from './components/weather/weather.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    MainComponent,
    WeatherComponent,
    TodoComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

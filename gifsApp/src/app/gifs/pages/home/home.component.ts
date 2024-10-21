import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

constructor(private gifService: GifsService) {}

get gifs(): Gif[] {
  return this.gifService.gifList;
}

}

import { Component } from '@angular/core';
import { ViagensService } from '../services/viagens.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private viagens;

  constructor(private vService: ViagensService){
    console.log(this.vService.getViagens());
    this.viagens = this.vService.getViagens();
  }

}

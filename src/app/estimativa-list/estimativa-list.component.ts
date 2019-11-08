import {Component, OnInit} from '@angular/core';
import {DevApiService} from '../service/dev-api.service';

@Component ({
  selector: 'app-estimativa-list',
  templateUrl: './estimativa-list.component.html',
  styleUrls: ['./estimativa-list.component.css']
})
export class EstimativaListComponent implements OnInit {

  private workItens;

  constructor(private devApiService: DevApiService) {
  }

  ngOnInit() {
    this.getWorkItens ();
  }

  private getWorkItens() {
    this.devApiService.getWorkItens ().subscribe (data => this.workItens = data);
  }
}

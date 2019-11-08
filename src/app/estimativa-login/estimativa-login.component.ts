import {Component, OnInit} from '@angular/core';
import {DevApiService} from '../service/dev-api.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component ({
  selector: 'app-estimativa-login',
  templateUrl: './estimativa-login.component.html',
  styleUrls: ['./estimativa-login.component.css']
})
export class EstimativaLoginComponent implements OnInit {

  form;

  authorizeUrl = 'https://app.vssps.visualstudio.com/oauth2/authorize?client_id=837EC619-6395-4B22-B3BE-8EE3C2CFD1E9&response_type=Assertion&scope=vso.work&redirect_uri=https://localhost:4200/estimativa/login';

  clientassertion = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im9PdmN6NU1fN3AtSGpJS2xGWHo5M3VfVjBabyJ9.eyJjaWQiOiI4MzdlYzYxOS02Mzk1LTRiMjItYjNiZS04ZWUzYzJjZmQxZTkiLCJjc2kiOiI3MTFmN2Q3ZS01ZmVhLTQ3OWQtYTY1ZC0zZGE3YzdkMGVjYjkiLCJuYW1laWQiOiJlNzFkNTRhYS0zMjliLTRkMTgtODM2Zi1kNGI3ZTg4NjBlMWUiLCJpc3MiOiJhcHAudnN0b2tlbi52aXN1YWxzdHVkaW8uY29tIiwiYXVkIjoiYXBwLnZzdG9rZW4udmlzdWFsc3R1ZGlvLmNvbSIsIm5iZiI6MTU3MzE4NjcwOCwiZXhwIjoxNzMxMDM5NTA4fQ.StCqinAuvH2_2E_Ca3qPknpUrRAvo7yP8lPzUN2Ligh887ymBssyLGthrJHDWDuzqlgoeikUQ5QJf-mFK9L5zdcE89RKM5VRIyvASSPYYSmxDxmE1rMw2ZVKouLGovQwNudKreaO4yKX1CCts0l6Drjp-ry7Yo08U4mBWvURU7CiMXE82ayeG-lRLVugOhTdqReBLLAal8nb0ncZLhpmS7mipGfG0gjQAs-flxQjbmzBh0YIbPFzPINqWpqog7nq6NwqYR2GfzEoifcO_dqF0YXHVOS6c-xpdR7DOACVemMUqP5IhrCzlwRVDkG-Nq2y5Kz_tsr67A5fVS0CW95DOA';

  constructor(private devApiService: DevApiService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group ({
      assertion: ''
    });
  }

  ngOnInit() {

  }

  token() {
    this.devApiService.getAccessToken (this.form.value.assertion, this.clientassertion);
  }

  getWorkItens() {
    this.devApiService.getWorkItens ().subscribe ((data) => {
      console.log (data);
    });
  }

  authorize() {
    // wrong. very wrong
    window.location = this.authorizeUrl;
  }
}

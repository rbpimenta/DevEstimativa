import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

interface AccessToken {
  access_token;
  token_type;
  expires_in;
  refresh_token;
}

@Injectable({
  providedIn: 'root'
})
export class DevApiService {

  workItensUpdatesUrl = 'https://dev.azure.com/teamaudit/GRCEVOL/_apis/wit/workItems/479/updates';
  accessToken: AccessToken;

  constructor(private http: HttpClient) { }

  getWorkItens(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.accessToken.access_token
      })};

    return this.http.get<any[]>(this.workItensUpdatesUrl, httpOptions);
  }

  getAccessToken(code, clientassertion) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })};

    const body = 'client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer' +
      '&client_assertion=' + clientassertion +
      '&grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer' +
      '&assertion=' + code +
      '&redirect_uri=https://localhost:4200/estimativa/login';

    this.http.post('https://app.vssps.visualstudio.com/oauth2/token', body, httpOptions).subscribe(data => {
      this.accessToken = data as AccessToken;
      console.log(data);
    });
  }
}

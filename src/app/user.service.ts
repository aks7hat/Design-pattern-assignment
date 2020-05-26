import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public register:Register

  constructor(private http: HttpClient) { }



public doRegistration(register) {
  return this.http.post("http://localhost:8090/register",
      register, { responseType: 'text' as 'json' });
}

public doLogin(credential)
{
  return this.http.post("http://localhost:8090/login", credential, { responseType: 'text' as 'json' });
}


public subscribe(events,id)
{
  return this.http.post("http://localhost:8090/user/" + id + "/event" ,events, { responseType: 'text' as 'json' });
}

public getNoti(id)
{
  return this.http.get("http://localhost:8090/user/" + id + "/event");
}
}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './Models/User';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    Login(userName: any, passWord: any) {
        console.log(btoa(userName+":"+passWord));
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Basic ${btoa(userName+":"+passWord)}`)
          }
        return this.http.get<any>(`https://localhost:44318/login`,header).
        pipe(map(user=>{
            if(user)
            {
                localStorage.setItem('currentUser',JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
      } 


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
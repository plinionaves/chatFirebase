import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../../Models/user.models';
import { FirebaseApp } from "@angular/fire";
import * as firebase from 'firebase/app';





@Injectable()
export class UserService {

  constructor(
    public db: AngularFireDatabase,
    public http: HttpClient,
    public firebaseApp: FirebaseApp,

    ) {
    console.log('Hello UserProvider Provider');
  }
  create(user: User, uuid: string) {
    return this.db.list(`/users`)
      .push(user);
  }

}
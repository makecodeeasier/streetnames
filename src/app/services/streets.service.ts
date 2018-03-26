import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Street } from '../models/street';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class StreetsService {
 
  private streetsList: Array<Street> = [];
  private streetsListObs = new BehaviorSubject<Array<Street>>([]);
  
  constructor() {
    this.streetsList = [];
    this.streetsListObs.next(this.streetsList);
  }

  add(street: Street) {
    this.streetsList.push(street);
    this.streetsListObs.next(this.streetsList);
  }

  remove(street: Street) {
    this.streetsList = this.streetsList.filter(e => e !== street);
    this.streetsListObs.next(this.streetsList);
  }

  show(street: Street) {
    const isVisible = document.getElementById(''+street.id+'').style.display == "block";
    document.getElementById(''+street.id+'').style.display="block";
    if (isVisible) document.getElementById(''+street.id+'').style.display="none";
  }


  getStreetsListObs(): Observable<Array<Street>> {
    return this.streetsListObs.asObservable();
  }
}

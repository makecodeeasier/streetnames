import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { StreetsService } from '../services/streets.service';
import { Street } from '../models/street';
import { Http } from "@angular/http";

 


@Component({
  selector: 'app-streets',
  templateUrl: './streets.component.html',
  styleUrls: ['./streets.component.css']
})
export class StreetsComponent implements OnInit {
  private data;
   streetsList: Array<Street> = [];

  constructor(private streetsService: StreetsService, private http: Http) {
    console.log('TodoTaskComponent');
    this.streetsService.getStreetsListObs().subscribe((streets: Array<Street>) => {
      this.streetsList = streets;
    });
  }

  ngOnInit() {



    this.http.get("http://dev.itsense.pl/adgroup/streets.php")
      .subscribe((data) => {
 
          this.data = data.json();

          let obj = JSON.parse(this.data);

          for (let n=0; n < obj.length; n++){
            console.log(obj[n]);
            this.streetsService.add(obj[n]);
          }

     });


  }

  remove(street: Street) {
    this.streetsService.remove(street);
  }

  details(street: Street) {

    this.streetsService.show(street);
 
  }


}

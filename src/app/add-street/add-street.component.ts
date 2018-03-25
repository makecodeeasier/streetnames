import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StreetsService } from '../services/streets.service';
import { Street } from '../models/street';

@Component({
  selector: 'app-add-street',
  templateUrl: './add-street.component.html',
  styleUrls: ['./add-street.component.css']
})
export class AddStreetComponent implements OnInit {
  newStreet: string;
  newDescription: string;

  constructor(private streetsService: StreetsService) { }

  ngOnInit() {
  }

  add() {
    var id = new Date().getMinutes() + new Date().getSeconds();
    const street: Street = { id: id, name: this.newStreet, created: new Date(), description: this.newDescription };
    this.streetsService.add(street);
    this.newStreet = '';
    this.newDescription = '';
  }
}

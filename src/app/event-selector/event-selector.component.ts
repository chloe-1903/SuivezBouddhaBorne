import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-event-selector',
	templateUrl: './event-selector.component.html',
	styleUrls: ['./event-selector.component.css']
})

export class EventSelectorComponent implements OnInit {
	@Input() events = [];
	@Output() selectedRoomUpdate = new EventEmitter();
	
	oldItemSelected = "";
	currentItemSelected = "";

	eventSelected = {};

	private selectRoom(event, selectedIndex) {
		this.eventSelected = event;
		this.selectedRoomUpdate.emit({'room': event.room, 'selectedIndex' : selectedIndex});
	}

	setItemSelected(key){
		if(this.oldItemSelected == this.currentItemSelected) {
			this.oldItemSelected = "";
		} else {
			this.oldItemSelected = this.currentItemSelected;
		}
		this.currentItemSelected = key;
	}

	isCollapse(key){
		return !(this.currentItemSelected == key && this.oldItemSelected != this.currentItemSelected);
	}

	keys() : Array<string> {
		return Object.keys(this.events);
	}

	constructor() { }

	ngOnInit() {
	}
}

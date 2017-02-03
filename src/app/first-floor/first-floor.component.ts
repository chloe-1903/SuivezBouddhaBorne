import { Component, OnInit, Input } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { RoomModalComponent } from '../room-modal/room-modal.component';

@Component({
	selector: 'app-first-floor',
	templateUrl: './first-floor.component.html',
	styleUrls: ['./first-floor.component.css']
})
export class FirstFloorComponent implements OnInit {
	@Input() floor;
	@Input() selectedEventRoomNumber;
	name = "Bâtiment Ouest - Rez-de-chaussée";
	roomSelected = false;

	selectedInterval = "9h - 10h";

	constructor(public dialog: MdDialog) { }

	booleanTest = true;

	timeSelected(event) {
		this.selectedInterval = event;
	}

	isEventSet(roomNumber){
		if(!this.floor){
			return false;
		}
		return (roomNumber == this.selectedEventRoomNumber);
	}

	findRoom(roomNumber) {
		for(var i = 0; i < this.floor.rooms.length ; i++){
			if(this.floor.rooms[i].number == roomNumber) {
				return this.floor.rooms[i];
			}
		}
		return {'roomNumber' : "Room not found", 'activity': "No activity found"};
	}

	openModal(roomNumber) {
		console.log("Room : " + roomNumber);
		var roomModal = this.dialog.open(RoomModalComponent);
		roomModal.componentInstance.room = this.findRoom(roomNumber);
		roomModal.componentInstance.floor = this.name;
		roomModal.componentInstance.timeInterval = this.selectedInterval;
	}

	ngOnInit() {
	}

}

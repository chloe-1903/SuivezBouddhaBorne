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
	name = "Bâtiment Ouest - Rez-de-chaussée";

	constructor(public dialog: MdDialog) { }

	booleanTest = true;

	test() {
		return this.booleanTest;
	}

	isEventSet(roomNumber){
		if(!this.floor){
			return false;
		}
		var room = this.findRoom(roomNumber);
		return (room.activity != "");
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
		console.log(this.dialog);
		var roomModal = this.dialog.open(RoomModalComponent);
		roomModal.componentInstance.room = this.findRoom(roomNumber);
		roomModal.componentInstance.floor = this.name;
	}

	ngOnInit() {
	}

}

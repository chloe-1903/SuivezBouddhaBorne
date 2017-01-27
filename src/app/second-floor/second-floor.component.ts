import { Component, OnInit, Input } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { RoomModalComponent } from '../room-modal/room-modal.component';

@Component({
	selector: 'app-second-floor',
	templateUrl: './second-floor.component.html',
	styleUrls: ['./second-floor.component.css']
})
export class SecondFloorComponent implements OnInit {
	@Input() floor;
	name = "Bâtiment Ouest - Premier Étage";

	constructor(public dialog: MdDialog) { }

	findRoom(roomNumber) {
		for(var i = 0; i < this.floor.rooms.length ; i++){
			if(this.floor.rooms[i].number == roomNumber) {
				return this.floor.rooms[i];
			}
		}
		console.log("Room not found");
		return {'number' : "Room not found", 'activity': "No activity found"};
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

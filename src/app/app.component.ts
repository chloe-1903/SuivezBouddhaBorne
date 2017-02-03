import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import {MdDialog, MdSnackBar} from '@angular/material';
import { SocketService } from './socket.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [SocketService]
})

export class AppComponent {
	title = 'app works!';
	floors = [];
	firstFloorName = "Bâtiment Ouest - Rez-de-chaussée";
	secondFloorName = "Bâtiment Ouest - Premier Étage";
	events = {"8h - 9h":[], "9h - 10h":[], "10h - 11h":[], "11h - 12h":[], "12h - 13h":[], "13h - 14h":[], "14h - 15h":[], "15h - 16h":[]};
	selectedEventRoomNumber = "";
	selectedIndex = 0;

	constructor(public dialog: MdDialog, public snackBar: MdSnackBar, private socketService: SocketService) {
		this.socketService.getRooms();

		this.socketService.socket.on('allRooms', function(data){
			console.log("Message received : allRooms")
			this.floors = JSON.parse(data);
			this.getEvents();
		}.bind(this));
	};

	roomSelected(event) {
		this.selectedEventRoomNumber = event.room;
		this.selectedIndex = event.selectedIndex;
	}

	// Parcours les salles pour trouver tous les évènements
	getEvents(){
		for(var i = 0; i < this.floors.length; i++){
			for(var j = 0; j < this.floors[i].rooms.length; j++){
				for(var time in this.floors[i].rooms[j].activity){
					if(this.floors[i].rooms[j].activity[time] != ""){
						this.events[time].push({'time': time, 'activity' : this.floors[i].rooms[j].activity[time], 'room': this.floors[i].rooms[j].number, 'selectedIndex' : i});
					}
				}
			}
		}
	}
}

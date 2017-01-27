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

	constructor(public dialog: MdDialog, public snackBar: MdSnackBar, private socketService: SocketService) {
		this.socketService.getRooms();

		this.socketService.socket.on('allRooms', function(data){
			console.log("Message received : allRooms")
			this.floors = JSON.parse(data);
		}.bind(this));
	};
}

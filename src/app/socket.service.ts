import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class SocketService {
	socket = io('http://localhost:8080');

	getRoomWithEvent(): void {
		this.socket.emit('getRoomWithEvent');
		console.log("get room with event");
	}


	getRooms() : void {
		this.socket.emit('askAllRooms');
	}
	
	setRoom(room, floor) : void {
		console.log("set room called");
		console.log(room);
		console.log(floor);
		this.socket.emit('setRoom', {'room': room, 'floor': floor});
	}
	constructor(public snackBar: MdSnackBar) {
		this.getRoomWithEvent();
		this.socket.on('roomEdition', function(data){
			snackBar.open(data, '', {
				duration: 2000,
			});
		});

		this.socket.on('roomWithEvent', function(data){
			console.log(data);
		});
	}
}

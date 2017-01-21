import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class SocketService {
	socket = io('http://10.212.109.188:8080');

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
		this.socket.on('roomEdition', function(data){
			snackBar.open(data, '', {
				duration: 2000,
			});
		});
	}
}

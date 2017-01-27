import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { SocketService } from '../socket.service';

@Component({
	selector: 'app-room-modal',
	templateUrl: './room-modal.component.html',
	styleUrls: ['./room-modal.component.css'],
	providers: [SocketService]
})
export class RoomModalComponent implements OnInit {
	room : Object;
	floor : String;
	timeInterval : String;

	constructor(public dialogRef: MdDialogRef<RoomModalComponent>, private socketService: SocketService) {
	}

	ngOnInit() {
	}

}

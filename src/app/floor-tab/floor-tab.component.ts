import { Component, OnInit, Input } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { RoomModalComponent } from '../room-modal/room-modal.component';

@Component({
	selector: 'app-floor-tab',
	templateUrl: './floor-tab.component.html',
	styleUrls: ['./floor-tab.component.css']
})

export class FloorTabComponent implements OnInit {
	@Input() floor;
	top = -10;
	test = "assets/floor1.svg";

	constructor(public dialog: MdDialog) {
	}

	openDialog(value) {
		this.dialog.open(RoomModalComponent);
	}

	testtest(){
		console.log("test");
	}

	ngOnInit() {
	}

}

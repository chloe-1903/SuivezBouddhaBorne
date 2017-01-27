import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-time-selector',
	templateUrl: './time-selector.component.html',
	styleUrls: ['./time-selector.component.css']
})
export class TimeSelectorComponent implements OnInit {
	timeIntervals = ["8h - 9h", "9h - 10h", "10h - 11h", "11h - 12h", "12h - 13h", "13h - 14h", "14h - 15h", "15h - 16h"]

	@Input() selectedInterval;
	@Output() selectedIntervalUpdate = new EventEmitter();

	private selectInterval(interval) {
		this.selectedInterval = interval;
		this.selectedIntervalUpdate.emit(this.selectedInterval);
	}

	constructor() {
	}

	ngOnInit() {
	}

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
	templateUrl: 'app/components/stars/stars.html',
	styleUrls: ['app/components/stars/stars.css'],
	selector: 'auction-stars'
})
export default class StarsComponent implements OnInit {
	@Input() count: number = 5;
	@Input() rating: number = 0;
	stars: boolean[] =[];

	ngOnInit() {
		for (let i = 1; i <= this.count; i++) {
			this.stars.push(i > this.rating);
		}
	}
}
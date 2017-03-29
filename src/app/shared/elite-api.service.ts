import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Nav, Platform } from 'ionic-angular';

@Injectable ()
export class EliteApi {
	private baseUrl = 'https://www.reddit.com/r/gifs/new/.json?limit=10%27).map(res'; 
	constructor(private http: Http){
	}


		getRedditData(){
			console.log('calling getRedditData');
			return new Promise ( resolve => {
				this.http.get('${this.baseUrl}')
				.subscribe(res => resolve(res.json()));
			})
		}

}
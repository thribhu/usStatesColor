import { Injectable, OnInit } from '@angular/core';
import { Http} from '@angular/http';


@Injectable({
  providedIn: 'root',
})
export class StateService implements OnInit {
    __states: any;
    state_name;
    us_state_id_codes = [
        {id: 'AK', name: 'Alaska'},
        {id: 'AL', name: 'Alabama'},
        {id: 'AR', name: 'Arkansas'},
        {id: 'AZ', name: 'Arizona'},
        {id: 'CA', name: 'California'},
        {id: 'CO', name: 'Colarado'},
        {id: 'CT', name: 'Connecticut'},
        {id: 'DC', name: 'District of Columbia'},
        {id: 'DE', name: 'Dealware'},
        {id: 'FL', name: 'Florida'},
        {id: 'GA', name: 'Georgia'},
        {id: 'HI', name: 'Hawaii'},
        {id: 'IA', name: 'Iowa'},
        {id: 'ID', name: 'Idaho'},
        {id: 'IL', name: 'Illinois'},
        {id: 'IN', name: 'Indiana'},
        {id: 'KS', name: 'Kansas'},
        {id: 'KY', name: 'Kentucky'},
        {id: 'LA', name: 'Louisiana'},
        {id: 'MA', name: 'Massachusetts'},
        {id: 'MD', name: 'Maryland'},
        {id: 'ME', name: 'Maine'},
        {id: 'MI', name: 'Michigan'},
        {id: 'MN', name: 'Minnesota'},
        {id: 'MO', name: 'Missouri'},
        {id: 'MS', name: 'Mississippi'},
        {id: 'MT', name: 'Montana'},
        {id: 'NC', name: 'North Carolina'},
        {id: 'ND', name: 'North Dakota'},
        {id: 'NE', name: 'Nebrsaka'},
        {id: 'NH', name: 'New Hampshire'},
        {id: 'NJ', name: 'New Jersy'},
        {id: 'NM', name: 'New Mexico'},
        {id: 'NV', name: 'Nevada'},
        {id: 'NY', name: 'New York'},
        {id: 'OH', name: 'Ohio'},
        {id: 'OK', name: 'Oklahoma'},
        {id: 'OR', name: 'Oregon'},
        {id: 'PA', name: 'Pennsylvania'},
        {id: 'RI', name: 'Rhode Island'},
        {id: 'SC', name: 'South Carolina'},
        {id: 'SD', name: 'South Dakota'},
        {id: 'TN', name: 'Tennessee'},
        {id: 'TX', name: 'Texas'},
        {id: 'UT', name: 'Utah'},
        {id: 'VA', name: 'Virginia'},
        {id: 'VT', name: 'Vermont'},
        {id: 'WA', name: 'Washington'},
        {id: 'WI', name: 'Wisconsin'},
        {id: 'WV', name: 'West Virginia'},
        {id: 'WY', name: 'Wyoming'}
      ];
      url = 'http://localhost:3000';
  constructor( private http: Http) { }
  ngOnInit() {
  }

  getStateFromApi()   {
       return this.http.get(`${this.url}/api/states`);
  }

  getStateObject () {
      const state = this.us_state_id_codes[Math.floor(Math.random() * this.us_state_id_codes.length)];
      // console.log(state.id);
      return state;
  }
  new_state(name) {
      // this.state_name = name;
       return(name);
     // console.log(name)''
  }
}

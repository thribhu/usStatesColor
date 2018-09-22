import { Component, OnInit, Input } from '@angular/core';
import { interval, Observable } from 'rxjs';
// import { StateService } from '../state-name-data.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  // state_name;
  // selected_state_id = '';
  // constructor(private stateService: StateService) {  }

  ngOnInit() {
  // this.state_name = this.stateService.new_state;
  // console.log('state name', this.state_name);
  // this.stateService.state_name_funciton();
  }
}

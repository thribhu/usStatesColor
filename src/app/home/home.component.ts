import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer, Inject } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { StateService } from '../state-name-data.service';
import { DOCUMENT} from '@angular/common';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  compnayName;
  filingObject;
  previous_id;
  state_id;
  stateUUId;
  state_name: any;
  constructor(private stateService: StateService, private http: Http, private elRef: ElementRef, @Inject(DOCUMENT) document) { }
  ngOnInit() {
    // this.newState();
   //  this.state_fucntion();
    //  this.http.get('http://localhost:3000/api/states').
    //  pipe(map(
    //     (response) => response.json()
    //  )).
    //  subscribe(
    //     (data) => {this.displaydata(data);
    //     }
    //  );
    this.changeStateColor();
  }
    // this.changeCol('hi');
    getStateNameFromApi() {
        this.stateService.getStateFromApi().
          pipe(map((response) => response.json()))
          .subscribe(
            (data) => {
              this.displaydata(data);
            }
          );
    }
    displaydata(data) {
      this.filingObject = data;
      this.compnayName = this.filingObject.rows[0].o_company_name;
      this.state_id = this.filingObject.rows[0].o_state;
      this.stateUUId = this.filingObject.rows[0].o_sk_txn_sec_filing;
    }

    public changeStateColor() {
      setInterval(() => {
          this.getStateNameFromApi();
          console.log(this.state_id, this.stateUUId, this.compnayName);
          document.getElementById(this.state_id).style.fill = 'black';
          setInterval(
            () => {
            document.getElementById(this.state_id).style.fill = '#d3d3d3';
          }, 6000);
          this.previous_id = this.state_id;
      }, 7000);
    }
  }
/*
  newFunction() {
    setInterval(() => {
      let __state;
      __state = this.stateService.getStateObject();
      this.stateService.new_state(__state.name);
      this.state_name = __state.name;
      console.log(this.state_name);
      this.state_id = __state.id;

      // document.getElementById(this.previous_id).style.fill = '#D3D3D3';
      document.getElementById(this.state_id).style.fill = 'black';
      // console.log(__state.name);
      // document.getElementById(this.state_id).style.fill = 'green';
      __state = '';
      this.state_name = '';
      console.log(this.state_name);
      this.previous_id = this.state_id;
      this.state_id = '';
    }, 3000);
  }
  */
/*
  changeCol(id) {
    console.log('hi!');
    let state_cond = true;
    while (state_cond) {
      document.getElementById(id).style.fill = '#d3d3d3';
      setInterval( () => {
        state_cond = false;
      }, 2000);
    }
  }
  */

  /*public newState() {
    this.state = this.stateService.getStateObject();
    console.log(this.state);
    this.state_id = this.state.id;
    this.stateService.new_state(this.state.name);
    document.getElementById(this.state_id).style.fill = 'black';
    this.state = '';
    console.log(this.state + 'empty');

  }
  */




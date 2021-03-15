import { Component, OnInit } from '@angular/core';
import {Rate} from '../rate';
import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
import {RateService} from '../rate.service';   
@Component({
  selector: 'app-ratepage',
  templateUrl: './ratepage.component.html',
  styleUrls: ['./ratepage.component.css']
})
export class RatepageComponent implements OnInit {
  data = false;
  rateForm :any;
  message:string;
  allRate : Observable<Rate[]>;
  constructor(private formbulider: FormBuilder,private rateservice:RateService) { 
    this.getAllRates();
  }

  ngOnInit(): void {
    this.rateForm = this.formbulider.group({
      SourceCity : ['',[Validators.required]],
      SourceState : ['',[Validators.required]],
      SourceCountry :['',[Validators.required]],
      DestinationCity : ['',[Validators.required]],
      DestinationState :['',[Validators.required]],
      DestinationCountry :['',[Validators.required]],
      Quantity : ['',[Validators.required]],
      Weight : ['',[Validators.required]],
      TotalRate : ['',[Validators.required]]
    });
    this.getAllRates();
  }
  onFormSubmit()
  {
    const rate = this.rateForm.value;
    this.AddNewRate(rate);
    this.getAllRates();
  }
  getAllRates()
  {
    this.allRate = this.rateservice.getAllRate();
  }
  AddNewRate(rate : Rate)
  {
    this.rateservice.addRate(rate).subscribe(
      ()=>
      {
        this.data = true;
        this.message = "Record Saved";
        console.log(this.message);
      }
    );
    this.getAllRates();
  }
  deleteRate(Id: string){
    if(confirm("Are You Sure ?")){
      this.rateservice.deleteRate(Id).subscribe(() =>{
        this.data = true;
        this.message ="Delete Success";
        this.getAllRates();
      });
    }
  }
}

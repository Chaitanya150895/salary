import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  a = 0;

  bs:number = 0;
  ta:number = 0;
  da:number = 0;
  hra:number = 0;
  cla:number = 0;
  pf:number = 0;
  insurance:number = 0;
  grossSalary:number = 0;
  basic_salary:number = 0;
  netSalary:number = 0;

  constructor() { }

  ngOnInit() {
  }

  calculateSalary() {
  
  console.log(this.basic_salary);
  this.bs = this.basic_salary * 1;
  this.ta = this.basic_salary * 0.13;
  this.da = this.basic_salary * 0.14;
  this.hra = this.basic_salary * 0.12;
  this.cla = this.basic_salary  * 0.11;
  this.insurance = this.basic_salary  * 0 + 500 ;
  this.pf = this.basic_salary * 0.15;
  
  this.grossSalary = this.ta + this.da + this.hra + this.cla + this.pf + this.bs;
  this.netSalary = this.grossSalary - this.pf - this.insurance;
  }
}
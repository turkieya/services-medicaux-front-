import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  rdvs:any=[];
  constructor(public rdvService:RdvService,private actRoute : ActivatedRoute) { 
    let  id = this.actRoute.snapshot.paramMap.get('id');
    this.readRdvById(id);
  }

  ngOnInit(): void {
  }

  readRdvById(id:any){
    this.rdvService.getRdvPatient(id).subscribe((data)=>{this.rdvs=data;
      console.log(this.rdvs)
    })
  }
}

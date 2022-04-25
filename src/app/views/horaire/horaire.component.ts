import { Component, Input, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { HoraireService } from 'src/app/services/horaire.service';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.css']
})
export class HoraireComponent implements OnInit {

  @Input() id:any;
  hor:any=[]
 
  constructor(public horServ:HoraireService,public authServ:AuthentificationService) {
   
   } 

  ngOnInit(): void {
    this.getHoraires();
    console.log(this.id);
  } 
getHoraires(){
  this.horServ.getHorairesMedecin(this.id).subscribe((data)=>{
        
    this.hor=data
    console.log(data)  })
  }
}

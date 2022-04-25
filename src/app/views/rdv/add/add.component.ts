import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { RdvService } from 'src/app/services/rdv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  ngOnInit(): void {
  }
  rdv={
    date:'',
    heure:'',
    med_id:'',
    pat_id:''

  };
  rdvForm : FormGroup;
  submitted = false;
  id_pat:any
  constructor(public formBuilder: FormBuilder, private rdvServ:RdvService , private actRoute : ActivatedRoute,private router:Router,public authServ:AuthentificationService) {
    //let  id_pat = this.actRoute.snapshot.paramMap.get('id_pat');
    let  id_med = this.actRoute.snapshot.paramMap.get('id_med');
    this.id_pat=this.authServ.idUser
    this.onSubmit(id_med,this.id_pat)
  
  }

  onReset()
  {
    this.submitted=false;
    this.rdvForm.reset();

  }

  onSubmit(id_med:any,id_pat:any)
  {
    const rdv={
      date:this.rdv.date,
      heure:this.rdv.heure,
      med_id:id_med,
      pat_id:id_pat
    };
    console.log(rdv)
    console.log(id_med)
    console.log(id_pat)
      this.rdvServ.add(rdv,id_med,id_pat).subscribe(
       (res)=>{ 
         
         const Toast = Swal.mixin({
           toast: true,
           position: 'top-end',
           showConfirmButton: false,
           timer: 3000,
           timerProgressBar: true,
           didOpen: (toast) => {
             toast.addEventListener('mouseenter', Swal.stopTimer)
             toast.addEventListener('mouseleave', Swal.resumeTimer)
           }
         })
         
         Toast.fire({
           icon: 'success',
           title: 'Rendez-vous ajouté avec succès'
         })

         console.log('Rendez-vous successfully created')
        // this.horServ.filter('register click');
         this.submitted=false;
         this.rdvForm.reset();
       },(error)=>{
         console.log(error);
       }
     );
  
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private http:HttpClient) { }

  //ADD RDV
  add(data: any,id_pat:any,id_med:any):Observable<any>{
    return this.http.post('http://localhost:8020/rdv/add/'+id_pat+'/'+id_med,data);
}

//RDV MEDECIN
getRdvMedecin(id: any){
  return this.http.get('http://localhost:8020/rdv/show_rdvmed/'+id);
}

//RDv Patient
getRdvPatient(id: any){
  return this.http.get('http://localhost:8020/rdv/show_rdvpat/'+id);
}

}

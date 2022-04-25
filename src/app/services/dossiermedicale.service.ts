import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DossiermedicaleService {

  constructor(private http:HttpClient) { }

   //ID DOSSIER PATIENT
   getIdDossier(id: any){
    return this.http.get('http://localhost:8020/patient/get/'+id);
  }
/*   ------------------------------------ SECTION ANALYSES --------------------------------- */
   //ADD ANALySE
   addAnalyse(data: any,id:any):Observable<any>{
    return this.http.post('http://localhost:8020/analyse/add/'+id,data);
 }
  //ANALYSES DOSSIER
  getAnalysesDossier(id: any){
    return this.http.get('http://localhost:8020/analyse/show_analyses/'+id);
  }

/*   ------------------------------------ SECTION ANTECEDENTS --------------------------------- */




/*   ------------------------------------ SECTION CONSULTATIONS --------------------------------- */


  private _listeners = new Subject<any>();
listen():Observable<any>{
  return this._listeners.asObservable();
}
filter(filterBy:string){
  this._listeners.next(filterBy);
}
}

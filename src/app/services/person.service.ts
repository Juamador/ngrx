import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private client: HttpClient) { }


  getUsersAPi(): Observable<any> {
    return this.client.get('https://gorest.co.in/public/v2/users');
    /*
    const Users = [{"id":2937961,"name":"Anamika Varma","email":"anamika_varma@conroy.example","gender":"male","status":"active"},{"id":2937959,"name":"Chinmayananda Embranthiri","email":"chinmayananda_embranthiri@champlin.test","gender":"female","status":"inactive"},{"id":2937958,"name":"Trisha Shukla","email":"shukla_trisha@schinner.example","gender":"male","status":"inactive"},{"id":2937957,"name":"Aruna Dhawan JD","email":"aruna_dhawan_jd@runolfsson-satterfield.example","gender":"male","status":"active"},{"id":2937956,"name":"Bilwa Singh","email":"singh_bilwa@mcclure-schiller.example","gender":"female","status":"active"},{"id":2937955,"name":"The Hon. Trilochan Tandon","email":"the_tandon_trilochan_hon@gleichner.test","gender":"male","status":"active"},{"id":2937954,"name":"Avantika Ahluwalia","email":"ahluwalia_avantika@howe.test","gender":"female","status":"inactive"},{"id":2937952,"name":"Gautama Mukhopadhyay","email":"mukhopadhyay_gautama@veum.test","gender":"male","status":"active"},{"id":2937951,"name":"Chandra Sinha","email":"sinha_chandra@kuphal.example","gender":"female","status":"inactive"},{"id":2937950,"name":"Bhagwati Naik","email":"naik_bhagwati@streich.example","gender":"male","status":"active"}];

    return of(Users).pipe(
      delay(1500)
    );*/
  }

}

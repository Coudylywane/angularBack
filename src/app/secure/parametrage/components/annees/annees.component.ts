import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AnneeScolaire } from 'src/app/secure/shared/interfaces/parametrages';
import { AnneeService } from 'src/app/secure/shared/services/annee.service';

@Component({
  selector: 'app-annees',
  templateUrl: './annees.component.html',
  styleUrls: ['./annees.component.css']
})
export class AnneesComponent  implements OnInit{
  annees = [] as AnneeScolaire[];
  subscrition=[] as Subscription[];

  constructor(private anneeService: AnneeService){

  }
  ngOnInit(): void {
    this.findAllAnnee();
  }

findAllAnnee(){
  this.subscrition.push(
   this.anneeService.all().subscribe(
    (data: any) => {
      console.log(data);

      this.annees = data;
    }
  ))
}

}

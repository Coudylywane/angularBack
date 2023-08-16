import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnneeScolaire } from '../interfaces/parametrages';
import { RestService } from 'src/app/shared/services/rest.service';


@Injectable()
export class AnneeService  extends RestService<AnneeScolaire>{
  protected override uri = 'annees'
}

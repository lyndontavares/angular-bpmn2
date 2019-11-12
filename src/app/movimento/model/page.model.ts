import { Movimento } from './movimento.model';

export class Page {
    content : Movimento[];
    totalPages : number;
    totalElements : number;
    last : boolean;
    size : number ;
    first : boolean ;
    sort : string ;
    numberOfElements : number ;

}

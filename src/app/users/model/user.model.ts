import { required, disable, prop, ltrim, trim } from '@rxweb/reactive-form-validators';
import { AbstractControl } from '@angular/forms';

export class User {
    
    @disable({conditionalExpression:function(control:AbstractControl){return true;}})
    @prop()
    id: number;
    
    @required()
    @trim() 
    username: string;

    @required()
    @trim() 
    alias: string;

    @prop()
    password: string;

    //@prop()
    //enabled: boolean;

    // @prop()
    // lastPasswordReset: Date;

    @prop()
    authorities: Array<any>;
}

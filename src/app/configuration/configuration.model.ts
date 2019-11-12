import { required, numeric, NumericValueType, alpha, contains, disable, prop, maxLength } from '@rxweb/reactive-form-validators';
import { identifierModuleUrl } from '@angular/compiler';

export class Configuration {
 
    @prop()
    id: number;

    @required()
    @alpha()
    ambiente:string;    
    
    @required()
    ativarSincronizacao:boolean;

    @required()
    csc:string;
   
    @required()
    intervaloChecagemRecebimento: number;
    
    @required()
    intervaloEnvioEmails: number;

    @prop()
    mensagemEnvioEmails: number;

    @required()
    qrlink:string; 

    @required()
    logdir:string; 

    @required()
    @numeric({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:false })
    sequenciaEnvio:number;

    @contains({value:''})
    versaoApi:string; 

    @required()
    emailHost: string;
    @required()
    emailPort: string;
    @required()
    emailSslSocketFactory: string;
    @required()
    emailAuth: string;
    @required()
    emailUsername: string;
    @required()
    emailPassword: string;
    
    @required()
    apiEmail: string;
    @required()
    apiSenha: string;
    @required()
    apiCliente: string;
    @required()
    apiUnidade: string;
    @prop()
    apiToken: string;

}

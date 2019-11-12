import { required, disable, prop, ltrim, trim } from '@rxweb/reactive-form-validators';

export class Movimento {
    @prop()
    id: number;
    
    @required()
    @trim() 
    login: string;

    @required()
    @trim() 
    alias: string;

    @required()
    senha: string;

    @prop()
    cdc: string;

    @prop()
    lote: string;

    @prop()
    situacaoTransient: string;

    @prop()
    xml: string;
    
    @prop()
    observacao: string;

    @prop()
    updatedDate: Date;

    @prop()
    emailEnviado: boolean;
}
export class User {
    constructor(
        public name : string,
        public email : string,
        public phone : number | null,
        public topic : string,
        public timepref : string,
        public subscribe : boolean,
        public address : {
            Street : string,
            City : string,
            State : string,
            PinCode : string,
        } 
    ){}
}

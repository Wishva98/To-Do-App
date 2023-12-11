export class TaskTO {
    // id :number;
    // description:string;
    // status:string;
    // email:string;

    constructor(public id:number|null,public description:string,public status:boolean|null,public email:string) {
        // this.id = id;
        // this.description =  description;
        // this.status = status;
        // this.email = email
    }
}
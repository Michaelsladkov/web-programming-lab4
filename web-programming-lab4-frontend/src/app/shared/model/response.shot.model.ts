export class ShotResponse {
    public x : number;
    public y : number;
    public r : number;
    public success : boolean;
    public dateTime : Date;
    public processingTime : number;


    constructor(x : number, y : number, r : number, success : boolean, date : Date, proc : number) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.success = success;
        this.dateTime = date;
        this.processingTime = proc;
    }
}
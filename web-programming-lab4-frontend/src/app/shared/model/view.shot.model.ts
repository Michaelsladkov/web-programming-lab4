export class ShotView {
    public x: number;
    public y: number;
    public r: number;
    public date: string;
    public processing: number;
    public success: string;

    constructor(x: number, y: number, r: number, date: string, proc: number, success: string) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.date = date;
        this.processing = proc;
        this.success =success;
    }
}
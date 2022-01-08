export class ShotRequest {
    public author : string;
    public x : number;
    public y : number;
    public r : number;

    constructor(author : string, x : number, y : number, r : number) {
        this.author = author;
        this.x = x;
        this.y = y;
        this.r = r;
    }
}
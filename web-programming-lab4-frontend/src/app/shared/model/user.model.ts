export class User {
    public username : string;
    public password : string;

    constructor(username : string, password : string) {
        this.password = password;
        this.username = username;
    }
}
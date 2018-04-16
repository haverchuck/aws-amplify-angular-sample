export interface IUser {
  userName: string;
}

export class User {
  userName: string;
  constructor(params) {
    this.userName = params.userName;
  }
}

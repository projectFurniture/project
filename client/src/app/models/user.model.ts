export class User {
  constructor(
    public username: string,
    public email: string,
    public roles: Array<string>,
    public accessToken: string,
    public refreshToken: string,
    public id?: string
  ) {}

  get userName() {
    return this.username;
  }

  get getRole() {
    return this.roles;
  }

  isUserAdmin() {
    return this.roles.includes('ROLE_ADMIN');
  }
}

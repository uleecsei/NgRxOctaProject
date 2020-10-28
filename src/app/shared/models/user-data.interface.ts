export interface IUserData {
  id: string;
  passwordChanged: string;
  profile: {
    login: string;
    firstName: string;
    lastName: string;
    locale: string;
    timeZone: string;
  };
}

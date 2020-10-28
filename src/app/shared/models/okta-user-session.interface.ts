import { IUserData } from './user-data.interface';

export interface IOktaUserSession {
  expiresAt: string;
  sessionToken: string;
  status: string;
  _embedded: {
    user: IUserData
  };
}

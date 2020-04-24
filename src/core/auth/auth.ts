import { User } from '../users/users';

export interface Auth {

    readonly user: User;
    readonly accessToken: string;
}

export interface UserModel {
    id?: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    username: string;
    password: string;
    role: string;
    token?: string;
}

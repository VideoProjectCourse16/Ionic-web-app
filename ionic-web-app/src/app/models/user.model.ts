export interface UserSignin {
    username: string;
    password: string;
}
export interface UserSignup {
    name: string;
    surname: string;
    username: string;
    password: string;
    repeatPassword: string;
}
export interface User {
    username: string;
    id: string;
    name: string;
    surname: string;
    iat: number;
}
export interface ResponseMe {
    message: string;
    user: User;
}
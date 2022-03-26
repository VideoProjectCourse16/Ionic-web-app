export interface Token{
    username: string;
    password: string,
    iat: number;
}

export interface TokenSignin {
    username: string;
    token: string;
}

export interface SigninResponse {
    message: string;
    user: TokenSignin;
}

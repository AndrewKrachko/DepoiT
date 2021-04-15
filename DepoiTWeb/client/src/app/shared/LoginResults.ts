export class LoginResult {
    token: string;
    tokenExpDate: Date;
}

export class LoginRequest {
    name: string;
    password: string;
}
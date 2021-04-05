
export interface AuthResponse {
    access_token?: string;
    statusCode?: number;
    message?: string;
}

export interface LoginBody {
    username: string;
    password: string;
}

export interface Usuario {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: string;


}

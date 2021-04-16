import { UserRole } from "./user-rol.enum";

export interface RegisterUser {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: UserRole;
}


import { UserRole } from "./user-rol.enum";

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: UserRole;
}


export interface User {
    id: string,
    email: string,
    password: string,
    firstname: string,
    lastname: string
}

export interface userResponse {
    success: boolean;
    token: string;
    user: User
}
import { Headers } from "@angular/http";

export class ServiceUtils {
    constructor() { }

    public static prepareHeaders(token: string) 
    {
        const headers = new Headers();

        headers.append("Authorization", token);
        headers.append("Content-Type", "application/json");

        return headers;
    }
}
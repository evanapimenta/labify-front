import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthController {
    constructor(private apiService: ApiService) {}

    login = (data: any) => {
        debugger
        return new Promise(() => {
            this.apiService.post(`login`, data).subscribe({
            next: (resp: any) => {}
        })
        })
         
    };

    logout = () => {};
}

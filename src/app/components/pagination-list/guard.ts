import { inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
 
export const myGuard = () => {
    const authService = inject(AuthService);
    return authService.isLogined();
};
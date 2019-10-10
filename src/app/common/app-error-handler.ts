import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
    handleError(error) {
        // en lugar de la alerta se puede mostrar una notificacion y guardar el mensaje de error en el servidor
        alert('An unexpected error occurred.');
        console.log(error);
    }
}
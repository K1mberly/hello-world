import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-github-profile',
    templateUrl: './github-profile.component.html',
    styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent{

    constructor(private router: Router) { }

    submit(){
        // devolverle parametros a la pagina que se retorna
        this.router.navigate(['/followers'], {
            queryParams: { page: 1 , order:'newest'}
        })
    }
    // constructor(private route: ActivatedRoute) { }

    // ngOnInit() {
    //     // cuando el usuario tiene que hacer un cambio de pagina (Ej. lista de usuarios, view de usuario1, lista de usuarios, view de usuario2) asi se accede a los parametros
    //     let id= this.route.snapshot.paramMap.get('id');
    //     console.log(id);

    //     // lo obtiene como observable, usado para casos en los que el usuario se puede quedar en la misma pagina (sin cambiar de componente)
    //     // this.route.paramMap
    //     //     .subscribe(params => {
    //     //         let id = +params.get('id');
                
    //     //         console.log(id)
    //     //     });

    //     // console.log('Github profile on init');
    // }

}

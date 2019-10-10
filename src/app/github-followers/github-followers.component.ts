import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'github-followers',
    templateUrl: './github-followers.component.html',
    styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
    followers;

    constructor(
        private route: ActivatedRoute,
        private service: FollowersService) { }

    ngOnInit(){
        combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
        .pipe(
            switchMap(combined => {
                let id = combined[0].get('id');
                let page = combined[1].get('page');
    
                return this.service.getAll();
                // .subscribe(followers => this.followers = followers);
            })
        )
        .subscribe( followers => this.followers = followers);
        // .subscribe( combined => {
        //     let id = combined[0].get('id');
        //     let page = combined[1].get('page');

        //     // this.service.getAll({id:id, page:page});
        //     this.service.getAll() 
        //     .subscribe(followers => this.followers = followers);
        // });

        // this.route.paramMap
        //     .subscribe( params => {

        //     });
        // // let id = this.route.snapshot.paramMap.get('id');

        // this.route.queryParamMap
        //     .subscribe( params => {

        //     });
        // // let page = this.route.snapshot.queryParamMap.get('page');

        // this.service.getAll() 
        // .subscribe(followers => this.followers = followers);
    }

}

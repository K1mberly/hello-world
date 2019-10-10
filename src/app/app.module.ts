import { FollowersService } from './services/followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponent } from './post/post.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent, 
    SummaryPipe, FavoriteComponent, TitleCasePipe, PanelComponent, LikeComponent, InputFormatDirective, ZippyComponent, ContactFormComponent, NewCourseFormComponent, SignupFormComponent, ChangePasswordComponent, PostComponent, GithubFollowersComponent, GithubProfileComponent, NavbarComponent, HomeComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'followers/:id/:username', 
            component: GithubProfileComponent
        },
        {
            path: 'followers', 
            component: GithubFollowersComponent
        },
        {
            path: 'posts', 
            component: PostComponent
        },
        {
            path: '**', 
            component: NotFoundComponent
        },
    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    FollowersService,
    {
        provide: ErrorHandler,
        useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

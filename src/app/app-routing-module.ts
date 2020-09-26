import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
    {
        path: "home",
        component: HomePageComponent
    },
    {
        path: "followers",
        component: GithubFollowersComponent
    },
    {
        path: "followers/:id/:username",
        component: ProfileFollowerComponent
    },
    {
        path: "posts",
        component: PostsComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

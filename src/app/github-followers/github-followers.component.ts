import { Component, OnInit } from '@angular/core';
import { GithubFollowers } from '../services/githubFollowers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private githubFollowers: GithubFollowers) { }

  ngOnInit(): void {
    this.getfollowers();
  }

  followers: any[] ;

  getfollowers() {
    this.githubFollowers.getAll()
      .subscribe(
        (followers: any[]) => this.followers = followers)
  }

}

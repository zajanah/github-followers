import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {

  id: number;
  username: string;
  page: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id');
    this.username = this.route.snapshot.paramMap.get('username');

    this.page = +this.route.snapshot.queryParamMap.get('page');

  }

}

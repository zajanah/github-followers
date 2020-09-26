import { Badinput } from './common/bad-input';
import { NotFoundError } from './common/not-found-error';
import { AppError } from './common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  status: boolean = true;

  post = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  }

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll()
      .subscribe(
        (posts: any[]) => this.posts = posts
        , error => {
          alert('erreur inattendue');
          console.log(error);
        })
  }


  createPost() {
    this.postService.create(this.post)
      .subscribe(
        (newPosts: any[]) => {
          this.post.id = newPosts['id'];
          this.posts.unshift(this.post);

          this.post = {
            id: 0,
            title: '',
            body: '',
            userId: 0
          }
        }, (error: AppError) => {
          if (error instanceof Badinput) {
            alert('merci de verifie vos information')
          } else {
            alert('erreur inattendue');
            console.log(error);
          }

        })
  }

  editPost(post) {
    this.post = post;
    this.status = false;
  }

  updatePost() {
    this.postService.update(this.post)
      .subscribe(() => {
        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: 0
        }

        this.status = true;
      }, error => {
        alert('erreur inattendue');
        console.log(error);
      })
  }

  deletePost(post) {
    this.postService.delete(post)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }, (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('ce post deja supprime !!')
          } else {
            alert('erreur inattendue');
            console.log(error);
          }
        })
  }

}

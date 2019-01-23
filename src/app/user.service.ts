import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../environments/environment';
import { User } from './user'
import { Repo } from './repo'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User;
  repos:Repo;
  reposArray:any;

  // my user profile
  private username:string;
  private client_id = '04fd0bb96c393d7b7105';
  private client_secret = 'B27f9a03fb39dc52557e8827d7b59c65c2a2c9bd';
  
  constructor(private http:HttpClient) { 
    console.log('Woohooo!')
    this.username = 'tc-mwangi';
    this.user = new User ('', '', '', '', '', '', 0, 0, 0, '');
    this.repos = new Repo('','','');
    this.reposArray = [];
  }

  userRequest(){

    interface ApiResponse{
      name: string;
      login: string;
      location: string;
      avatar_url: string;
      bio: string;
      email: string;
      followers: number;
      following: number;
      public_repos: number;
      html_url: string;

    }


    
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret).toPromise().then(response=>{
            
          this.user.name = response.name;
          this.user.login = response.login; 
          this.user.location = response.location;
          this.user.avatar_url = response.avatar_url;
          this.user.bio = response.bio;    
          this.user.email = response.email;
          this.user.followers = response.followers;
          this.user.following = response.following;
          this.user.public_repos = response.public_repos;
          this.user.html_url = response.html_url;

          resolve()
          
        },
        error=>{
                this.user.name="top_cat"
                this.user.avatar_url="https://avatars3.githubusercontent.com/u/45211962?v=4"
                this.user.location ="Nairobi, Kenya."
                this.user.bio ="Taking the road less travelled."
                
                reject(error)
            }
        )
    })

    return promise
  }

  
}

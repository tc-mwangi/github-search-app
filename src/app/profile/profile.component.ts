import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

  user:any[];
  repos: any[];
  username:string;



  constructor(private userService: UserService) { 
    // this.user = userService.getUser();
    // this.repos = userService.getRepos();
    // this.user = userService.updateUser()
  }

  // getUserDetails(){


  // }
  // getRepos(){


  // }
  // updateUserDetails(){

    
  // }


  ngOnInit() {
    this.userService.userRequest()
  }

}

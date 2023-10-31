import { Component } from '@angular/core';
import { UserService } from '../services/userService/user.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProjectService } from '../services/projectService/project.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private user: UserService, private breakPoint: BreakpointObserver, private routing: Router, private authentication: AuthService,
    private project: ProjectService) { }

  loggedUser: string = '';
  currentUser: boolean = false;
  DeskTopView: boolean = false;

  isBoardViewVisible: boolean=false;

  ngOnInit() {
    this.isBoardViewVisible=false;
    this.breakPoint.observe([Breakpoints.Handset]).subscribe(
      result => {
        this.DeskTopView = !result.matches;
      }
    )
    this.routing.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isBoardViewVisible = event.url !== '/homepage';
      }
    });
 }


  ngDoCheck() {

    this.loggedUser = this.user.getUser();
    if (typeof this.loggedUser !== 'undefined' && this.user.getUser().length > 0) {
      this.currentUser = true;

    } else {
      this.currentUser = false;
    }
  }

  logOut() {
    this.authentication.setLogOutStatus();
    this.user.setUser('')
    this.currentUser = false;
    // this.project.setProjectName(undefined);
    this.routing.navigate([`/login`])
  }
  openBoardView(){
    this.routing.navigate([`/boardView`])
  }

}

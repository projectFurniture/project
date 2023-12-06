import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

/* This component handles the authentication functionality */
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginPage: boolean = false;
  errorMessage: string = '';
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.title.subscribe((data) => {
      this.isLoginPage = data !== 'Sign-Up';
    });
  }

    // Handles form submission
  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.isLoginPage) {
        const { email, password } = form.value;
        this.authService.login(email, password).subscribe(
          (data) => {
            this.router.navigate(['/']);
          },
          (error) => {
            this.errorMessage = error;
          }
        );
      } else {
        const { username, email, password } = form.value;
        this.authService.signUp(username, email, password).subscribe(
          (data) => {
            this.router.navigate(['/']); // Navigate to the home page on successful sign-up
          },
          (error) => {
            this.errorMessage = error; // Display error message on sign-up failure
          }
        );
      }
    } else {
      this.errorMessage = 'Invalid Form Details'; // Display error message for invalid form
    }
  }
}

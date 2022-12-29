import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
    ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.httpClient.post('http://localhost:8000/api/register/',
    {
      "username": this.registerForm.value.username,
      "password": this.registerForm.value.password,
      "password2": this.registerForm.value.password2,
      "email": this.registerForm.value.email,
  })
  .subscribe(() => {});
  }

}

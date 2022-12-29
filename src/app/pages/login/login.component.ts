import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: "",
    password: "",
  });

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.httpClient
      .post(
        "http://localhost:8000/api/login/",
        {
          username: this.loginForm.value.username,
          password: this.loginForm.value.password,
        },
        {
          withCredentials: true,
        }
      )
      .subscribe((res) => {
        console.log(res);
        this.httpClient
          .get("http://localhost:8000/api/users/", {
            withCredentials: true,
          })
          .subscribe((res2) => console.log(res2));
      });
  }
}

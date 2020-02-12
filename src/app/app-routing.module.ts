import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { QueteDirectivesComponent } from "./quete-directives/quete-directives.component";
import { MoviesComponent } from "./movies/movies.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "./", component: AppComponent },
  { path: "contact", component: ContactComponent },
  { path: "signup", component: SignUpComponent },
  { path: "user", component: UserProfileComponent },
  { path: "quetedirectives", component: QueteDirectivesComponent },
  { path: "movies", component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

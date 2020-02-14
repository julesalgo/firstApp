import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { QueteDirectivesComponent } from "./quete-directives/quete-directives.component";
import { MoviesComponent } from "./movies/movies.component";
import { AppComponent } from "./app.component";
import { CreateKittenComponent } from "./create-kitten/create-kitten.component";
import { ListKittenComponent } from "./list-kitten/list-kitten.component";
import { UserKittenComponent } from "./user-kitten/user-kitten.component";
import { DrivenFormComponent } from "./driven-form/driven-form.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { MagicOvenComponent } from "./magic-oven/magic-oven.component";
import { DeveloperComponent } from "./developer/developer.component";

const routes: Routes = [
  { path: "./", component: AppComponent },
  { path: "contact", component: ContactComponent },
  { path: "signup", component: SignUpComponent },
  { path: "user", component: UserProfileComponent },
  { path: "quetedirectives", component: QueteDirectivesComponent },
  { path: "movies", component: MoviesComponent },
  { path: "createkitten", component: CreateKittenComponent },
  { path: "listkitten", component: ListKittenComponent },
  { path: "userkitten", component: UserKittenComponent },
  { path: "drivenform", component: DrivenFormComponent },
  { path: "kitchen", component: KitchenComponent },
  { path: "magicoven", component: MagicOvenComponent },
  { path: "developercomponent", component: DeveloperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

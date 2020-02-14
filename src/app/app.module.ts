import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { QueteDirectivesComponent } from "./quete-directives/quete-directives.component";
import { HighlightDirective } from "./highlight.directive";
import { DisplayGuestsDirective } from "./display-guests.directive";
import { MoviesComponent } from "./movies/movies.component";
import { HoverDirective } from "./hover.directive";
import { ContactComponent } from "./contact/contact.component";
import { MenuComponent } from "./menu/menu.component";
import { CreateKittenComponent } from "./create-kitten/create-kitten.component";
import { ListKittenComponent } from "./list-kitten/list-kitten.component";
import { UserKittenComponent } from "./user-kitten/user-kitten.component";
import { DrivenFormComponent } from "./driven-form/driven-form.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { MagicOvenComponent } from "./magic-oven/magic-oven.component";
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    QueteDirectivesComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    MoviesComponent,
    HoverDirective,
    ContactComponent,
    MenuComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    DrivenFormComponent,
    KitchenComponent,
    MagicOvenComponent,
    DeveloperComponent,
    SkillComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

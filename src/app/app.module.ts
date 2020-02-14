import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

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
    DrivenFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

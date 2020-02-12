import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { QueteDirectivesComponent } from "./quete-directives/quete-directives.component";
import { HighlightDirective } from "./highlight.directive";
import { DisplayGuestsDirective } from './display-guests.directive';
import { MoviesComponent } from './movies/movies.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    QueteDirectivesComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    MoviesComponent,
    HoverDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

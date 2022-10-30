import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgCircleProgressModule } from "ng-circle-progress";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { BannerComponent } from "./components/banner/banner.component";
import { EditeducationComponent } from "./components/education/editeducation.component";
import { EducationComponent } from "./components/education/education.component";
import { NeweducationComponent } from "./components/education/neweducation.component";
import { EditExperienceComponent } from "./components/experience/edit-experience.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { NewExperienceComponent } from "./components/experience/new-experience.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarHeaderComponent } from "./components/navbar-header/navbar-header.component";
import { interceptorProvider } from "./components/service/interceptor-service";
import { SkillComponent } from "./components/skill/skill.component";
import { NewskillComponent } from './components/skill/newskill.component';
import { EditskillComponent } from './components/skill/editskill.component';
import { EditaboutMeComponent } from './components/about-me/editabout-me.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NewproyectosComponent } from './components/proyectos/newproyectos.component';
import { EditproyectosComponent } from './components/proyectos/editproyectos.component';




@NgModule({
  declarations: [
    AppComponent,

    BannerComponent,
    EducationComponent,
    AboutMeComponent,
    ExperienceComponent,
    HomeComponent,
    NavbarHeaderComponent,
    LoginComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    NeweducationComponent,
    EditeducationComponent,
    FooterComponent,
    SkillComponent,
    NewskillComponent,
    EditskillComponent,
    EditaboutMeComponent,
    ProyectosComponent,
    NewproyectosComponent,
    EditproyectosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

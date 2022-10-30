import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaboutMeComponent } from './components/about-me/editabout-me.component';
import { EditeducationComponent } from './components/education/editeducation.component';
import { NeweducationComponent } from './components/education/neweducation.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectosComponent } from './components/proyectos/editproyectos.component';
import { NewproyectosComponent } from './components/proyectos/newproyectos.component';
import { EditskillComponent } from './components/skill/editskill.component';
import { NewskillComponent } from './components/skill/newskill.component';






const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienceComponent},
  {path:'editexp/:id', component: EditExperienceComponent},
  {path:'nuevaedu', component: NeweducationComponent},
  {path:'editedu/:id', component: EditeducationComponent},
  {path: 'newskill', component: NewskillComponent},
  {path: 'editskill/:id', component: EditskillComponent},
  {path: 'editaboutMe/:id', component: EditaboutMeComponent},
  {path: 'nuevopro', component: NewproyectosComponent},
  {path: 'editpro/:id', component: EditproyectosComponent}
  
  /*{path:'',redirectTo:'login',pathMatch:'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

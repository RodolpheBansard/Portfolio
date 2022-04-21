import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {WorkComponent} from "./components/work/work.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'work', component:WorkComponent},
  {path:'skills', component:SkillsComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

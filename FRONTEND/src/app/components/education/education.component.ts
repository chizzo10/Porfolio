import { Component, OnInit } from '@angular/core';
import { Education } from '../Model/education';
import { EducationService } from '../service/education.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education[] = [];

  constructor(private educationService: EducationService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducation();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducation(): void{
    this.educationService.lista().subscribe(
      data =>{
        this.education = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.educationService.delete(id).subscribe(
        data => {
          this.cargarEducation();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}

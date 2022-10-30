import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from '../Model/education';
import { EducationService } from '../service/education.service';

@Component({
  selector: 'app-neweducation',
  templateUrl: './neweducation.component.html',
  styleUrls: ['./neweducation.component.css']
})
export class NeweducationComponent implements OnInit {

  nombreE: string;
  descripcionE: string;

  constructor(private educationService: EducationService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const education = new Education(this.nombreE, this.descripcionE);
    this.educationService.save(education).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }


}

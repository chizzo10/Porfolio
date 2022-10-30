import { Component, OnInit } from '@angular/core';
import { Experience } from '../Model/experience';
import { ExperienceService } from '../service/experience.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expe: Experience[] = [];
  constructor(private experienceService: ExperienceService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarExperience();
    if (this.tokenService.getToken()) {
      this.isLogged = true;

    } else {
      this.isLogged = false;
    }
  }



  cargarExperience(): void {
    this.experienceService.lista().subscribe(data => { this.expe = data; })
  }
  delete(id?: number) {
    if (id != undefined) {
      this.experienceService.delete(id).subscribe(
        data => {
          this.cargarExperience();
        }, err => {
          alert("Error al borrrar la experiencia");
        }
      )
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { persona } from "../Model/persona.model";
import { PersonaService } from "../service/persona.service";


@Component({
  selector: 'app-editabout-me',
  templateUrl: './editabout-me.component.html',
  styleUrls: ['./editabout-me.component.css']
})
export class EditaboutMeComponent implements OnInit {
  Persona: persona = null;

  constructor(
    private personaService: PersonaService,
    private activatedRoute : ActivatedRoute,
    private router: Router
    ) {} 

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {this.Persona = data;
      }, err => {
        alert("Error al modificar ");
        this.router.navigate(['']);
      }
      )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id,this.Persona).subscribe(
      data => {
        this.router.navigate([''])
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }
}
import { Component, OnInit } from "@angular/core";
import { persona } from "../Model/persona.model";
import { PersonaService } from "../service/persona.service";
import { TokenService } from "../service/token.service";



@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  persona: persona = new persona("","","","","",);

  constructor(public personaService: PersonaService, private tokenService: TokenService){}
  isLogged = false;
  
  ngOnInit(): void {  
   this.cargarPersona();
   if(this.tokenService.getToken()){
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
  }
  
  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data})
  }
  
  
  
  
 
  
  }
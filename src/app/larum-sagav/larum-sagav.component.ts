import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/sagav.model';
import { VagasService } from '../vagas.service';



@Component({
  selector: 'app-larum-sagav',
  templateUrl: './larum-sagav.component.html',
  styleUrls: ['./larum-sagav.component.css']
})
export class LarumSagavComponent implements OnInit {

  public vagas: Vaga[] = [];


  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();

  }

  listarVagas(){
    this._vagasService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(
          item => {
            return new Vaga(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );
           }
          )
        }
      )
  }
}

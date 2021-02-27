import { Component } from '@angular/core';
import { Componente } from './interfaces/componente-interface';
import { Observable } from 'rxjs';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes:Observable<Componente[]>;

  constructor(private dataService:MenuService) {}

  ngOnInit() {
    this.componentes=this.dataService.getMenuOpts();
  }
}

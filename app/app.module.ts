import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MedicamentoService } from './medicamentos/medicamento.service';
import { TipoService } from './tipo/tipo.service';
import { ToastyModule } from '../../node_modules/ng2-toasty';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    CoreModule,
    ToastyModule.forRoot(),
    AppRoutingModule
  ],
  providers: [MedicamentoService, TipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

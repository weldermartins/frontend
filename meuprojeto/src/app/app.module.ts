import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// é bom separar as importações do angular e do projeto.
//questão de organização.
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NomecomponentComponent } from './nomecomponent/nomecomponent.component';
import { FormsModule } from '@angular/forms';

//decorator
@NgModule({
  
  declarations: [
    AppComponent,
    HelloComponent,
    NomecomponentComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //component principal deste projeto.
  bootstrap: [AppComponent]
})
export class AppModule { }

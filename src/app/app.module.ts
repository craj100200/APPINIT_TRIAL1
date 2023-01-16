import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppInfo } from './app-info';


import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoService } from './info.service';


//const appInitializerFn = (infoService: InfoService) => {
//  return () => {
//    return infoService.loadInfo().then( (promise) => {alert("tete"); return promise } ).then(_ => Promise.resolve(true)).then(_ => alert("tetete"));
//  };
//};



//WORKING APPINITIALIZER FUNCTION
const appInitializerFn = (infoService: InfoService,  httpClient : HttpClient) => { 

return () => {
    //return infoService.loadInfo()
	return Promise.resolve(true)
	.then( (promise) => {alert("tete"); return promise } )
	.then(_ => infoService.setConfig(new AppInfo("aaaa")))
	.then(_ => alert("tetete"));
  };

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule 
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [InfoService, HttpClient]
    },
    InfoService
],
  bootstrap: [AppComponent]
})
export class AppModule { }

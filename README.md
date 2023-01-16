# Stk1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


##Look closely at the following two blocks in app.module.ts; both of them are working

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

## Taken From 
https://stackblitz.com/edit/angular-using-app-initializer?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Finfo.service.ts,src%2Fapp%2Fapp-info.ts,src%2Fapp%2Fapp.module.ts

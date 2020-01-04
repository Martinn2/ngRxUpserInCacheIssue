# NgRxUpsertInCacheIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `npm run server` to start test express server.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

When data is loaded from express server as many times as needed, no errors occur. However once changes are added using upsertOneInCache method and then loaded from server again, an error destroying immutability of store occures and can be seen in console.

If strictStateImmutability is set to false everything works.


# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

Functions:
````
a. Node selection
b. Edit data of any node
c. Delete any node
d. Add new project to tree
e. Add new task to tree
f. Save data to browser storage
g. Filtering tree by string query. Example of filtering:
````
Given a tree:
````
Project 1
    Task 1
    Task 2
        Task 2.1
        Task 2.2
    Task 3
Project 2
    Task N
    Task M
````

Search: “Task 2.2”
Should display:
````
Project 1
    Task 2
        Task 2.2 
````
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

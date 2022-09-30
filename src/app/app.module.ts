import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MaterialModule } from './service/material-module';
import { AddNodeComponent } from './theme/add-node/add-node.component';
import { EditNodeComponent } from './theme/edit-node/edit-node.component';
import { DeleteNodeComponent } from './theme/delete-node/delete-node.component';
import { EditNodeDialogComponent } from './theme/edit-node-dialog/edit-node-dialog.component';
import { NewNodeDialogComponent } from './theme/new-node-dialog/new-node-dialog.component';


@NgModule({
    entryComponents: [
        EditNodeDialogComponent,
        NewNodeDialogComponent
    ],
    declarations: [
        AppComponent,
        AddNodeComponent,
        EditNodeComponent,
        DeleteNodeComponent,
        EditNodeDialogComponent,
        NewNodeDialogComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

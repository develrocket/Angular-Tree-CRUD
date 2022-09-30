import { NgModule } from '@angular/core';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTreeModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        ScrollingModule,
        BrowserAnimationsModule,
    ],
    exports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTreeModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        ScrollingModule,
        BrowserAnimationsModule,
    ]
})
export class MaterialModule {}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../service/tree-data.model";

@Component({
    selector: 'app-new-node-dialog',
    templateUrl: './new-node-dialog.component.html',
    styleUrls: ['./new-node-dialog.component.scss']
})
export class NewNodeDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<NewNodeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(): void {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onEditClick(): void {
        this.dialogRef.close({nodeName: this.data.Name, nodeDescription: this.data.Description});
    }

}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../service/tree-data.model";

@Component({
    selector: 'app-edit-node-dialog',
    templateUrl: './edit-node-dialog.component.html',
    styleUrls: ['./edit-node-dialog.component.scss']
})
export class EditNodeDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<EditNodeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    }


    ngOnInit(): void {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onEditClick(): void {
        this.dialogRef.close({nodeName: this.data.Name, nodeDescription: this.data.Description});
    }
}

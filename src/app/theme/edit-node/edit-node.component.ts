import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TreeData} from "../../service/tree-data.model";
import {MatDialog} from "@angular/material/dialog";
import {EditNodeDialogComponent} from "../edit-node-dialog/edit-node-dialog.component";

@Component({
    selector: "app-edit-node",
    templateUrl: "./edit-node.component.html",
    styleUrls: ["./edit-node.component.scss"]
})
export class EditNodeComponent {
    @Input() isTop: boolean | undefined;
    @Input() currentNode: TreeData | undefined;
    @Output() edittedNode = new EventEmitter();

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(EditNodeDialogComponent, {
            width: "250px",
            data: {
                Name: this.currentNode ? this.currentNode.Name : '',
                Description: this.currentNode ? this.currentNode.Description : '',
                Component: "Edit"
            }
        });

        dialogRef.afterClosed().subscribe((result: { nodeName: any; nodeDescription: any; }) => {
            if (result) {
                const node: TreeData = {
                    Id: this.currentNode ? this.currentNode?.Id : 0,
                    Name: result.nodeName,
                    Description: result.nodeDescription,
                    Children: this.currentNode ? this.currentNode.Children : []
                };
                this.edittedNode.emit({ currentNode: this.currentNode, node: node });
            }
        });
    }
}

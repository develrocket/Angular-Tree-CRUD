import {TreeData} from '../../service/tree-data.model';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewNodeDialogComponent} from "../new-node-dialog/new-node-dialog.component";

@Component({
    selector: 'app-add-node',
    templateUrl: './add-node.component.html',
    styleUrls: ['./add-node.component.scss']
})
export class AddNodeComponent {
    @Input() isTop: boolean | undefined;
    @Input() currentNode: TreeData | undefined;
    @Output() addedNode = new EventEmitter;
    name: string | undefined;
    description: string | undefined;

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(NewNodeDialogComponent, {
            width: '250px',
            data: {nodeName: this.name, nodeDescription: this.description, Component: 'Add'}
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const node: TreeData = {
                    Id: 0,
                    Name: result.nodeName,
                    Description: result.nodeDescription,
                    Children: []
                };
                if (this.isTop) {
                    this.addedNode.emit(node);
                } else {
                    this.addedNode.emit({currentNode: this.currentNode, node: node});
                }
            }
        });
    }
}

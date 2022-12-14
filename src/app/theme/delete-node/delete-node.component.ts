import { TreeData } from './../../service/tree-data.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-delete-node',
    templateUrl: './delete-node.component.html',
    styleUrls: ['./delete-node.component.scss']
})
export class DeleteNodeComponent {
    @Output() deletedNode = new EventEmitter;
    @Input() currentNode: TreeData | undefined;

    deleteNode() {
        this.deletedNode.emit(this.currentNode);
    }

}

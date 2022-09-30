import { TreeFunctionService } from "./service/tree-function.service";
import { TreeDataService } from "./service/tree-data.service";
import { TreeData } from "./service/tree-data.model";
import { Component, OnInit } from "@angular/core";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { NestedTreeControl } from "@angular/cdk/tree";
import { of as observableOf } from "rxjs";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    title = 'test';
    searchKey = '';

    nestedTreeControl: NestedTreeControl<TreeData>;
    nestedDataSource: MatTreeNestedDataSource<TreeData>;
    allTreeData: string;

    constructor(
        private dataService: TreeDataService,
        private service: TreeFunctionService
    ) {}

    ngOnInit() {
        this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
        this.nestedDataSource = new MatTreeNestedDataSource();
        let treeData = localStorage.getItem('tree-data');
        if (treeData) {
            this.nestedDataSource.data = JSON.parse(treeData);
        } else {
            this.dataService._dataChange.subscribe(
                data => (this.nestedDataSource.data = data)
            );
        }

        this.allTreeData = JSON.stringify(this.nestedDataSource.data);
    }

    private _getChildren = (node: TreeData) => observableOf(node.Children);

    hasNestedChild = (_: number, nodeData: TreeData) =>
        nodeData.Children.length > 0;

    refreshTreeData(isSave = true) {
        const data = this.nestedDataSource.data;
        if (isSave) {
            localStorage.setItem('tree-data', JSON.stringify(data));
            this.allTreeData = JSON.stringify(data);
        }
        // @ts-ignore
        this.nestedDataSource.data = null;
        this.nestedDataSource.data = data;
    }

    searchData() {
        let tempData = JSON.parse(this.allTreeData);
        if (this.searchKey) {
            this.nestedDataSource.data = this.service.filterNode(this.searchKey, tempData);
        } else {
            this.nestedDataSource.data = tempData;
        }
        this.refreshTreeData(false);
    }

    addNode(node: TreeData) {
        node.Id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
        this.nestedDataSource.data.push(node);
        this.refreshTreeData();
    }

    addChildNode(childrenNodeData: { node: { Id: number; }; currentNode: { Children: any[]; }; }) {
        childrenNodeData.node.Id =
            this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
        childrenNodeData.currentNode.Children.push(childrenNodeData.node);
        this.refreshTreeData();
    }

    editNode(nodeToBeEdited: { currentNode: { Id: number; }; node: TreeData; }) {
        const fatherElement: TreeData = this.service.findFatherNode(
            nodeToBeEdited.currentNode.Id,
            this.nestedDataSource.data
        );
        let elementPosition: number;
        nodeToBeEdited.node.Id =
            this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
        // @ts-ignore
        if (fatherElement[0]) {
            // @ts-ignore
            fatherElement[0].Children[fatherElement[1]] = nodeToBeEdited.node;
        } else {
            // @ts-ignore
            elementPosition = this.service.findPosition(
                nodeToBeEdited.currentNode.Id,
                this.nestedDataSource.data
            );
            this.nestedDataSource.data[elementPosition] = nodeToBeEdited.node;
        }
        this.refreshTreeData();
    }

    deleteNode(nodeToBeDeleted: TreeData) {
        const deletedElement: TreeData = this.service.findFatherNode(
            nodeToBeDeleted.Id,
            this.nestedDataSource.data
        );
        let elementPosition: number;
        if (
            window.confirm(
                "Are you sure you want to delete " + nodeToBeDeleted.Name + "?"
            )
        ) {
            // @ts-ignore
            if (deletedElement[0]) {
                // @ts-ignore
                deletedElement[0].Children.splice(deletedElement[1], 1);
            } else {
                // @ts-ignore
                elementPosition = this.service.findPosition(
                    nodeToBeDeleted.Id,
                    this.nestedDataSource.data
                );
                this.nestedDataSource.data.splice(elementPosition, 1);
            }
            this.refreshTreeData();
        }
    }
}

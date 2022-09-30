import { Injectable } from '@angular/core';
import { TreeData } from './tree-data.model';

@Injectable({
    providedIn: 'root'
})
export class TreeFunctionService {

    flatJsonArray(flattenedAray: Array<TreeData>, node: TreeData[]) {
        const array: Array<TreeData> = flattenedAray;
        node.forEach(element => {
            if (element.Children) {
                array.push(element);
                this.flatJsonArray(array, element.Children);
            }
        });
        return array;
    }

    findNodeMaxId(node: TreeData[]) {
        const flatArray = this.flatJsonArray([], node);
        const flatArrayWithoutChildren: number[] = [];
        flatArray.forEach(element => {
            flatArrayWithoutChildren.push(element.Id);
        });
        return Math.max(...flatArrayWithoutChildren);
    }

    // @ts-ignore
    findPosition(id: number, data: TreeData[]) {
        for (let i = 0; i < data.length; i += 1) {
            if (id === data[i].Id) {
                return i;
            }
        }
    }

    // @ts-ignore
    findFatherNode(id: number, data: TreeData[]) {
        for (let i = 0; i < data.length; i += 1) {
            const currentFather = data[i];
            for (let z = 0; z < currentFather.Children.length; z += 1) {
                if (id === currentFather.Children[z]['Id']) {
                    return [currentFather, z];
                }
            }
            for (let z = 0; z < currentFather.Children.length; z += 1) {
                if (id !== currentFather.Children[z]['Id']) {
                    // @ts-ignore
                    const result = this.findFatherNode(id, currentFather.Children);
                    if (result !== false) {
                        return result;
                    }
                }
            }
        }
        return false;
    }

    // @ts-ignore
    filterNode(key: string, data: TreeData[]) {
        for (let i = 0; i < data.length; i ++) {
            const currentNode = data[i];
            if (currentNode.Name.indexOf(key) >= 0)  continue;
            if (currentNode.Children.length > 0) {
                currentNode.Children = this.filterNode(key, currentNode.Children);
                if (currentNode.Children.length == 0) {
                    data.splice(i, 1);
                    i --;
                }
            } else {
                data.splice(i, 1);
                i --;
            }
        }
        return data;
    }

}

import { TreeData } from './tree-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TreeDataService {

    _dataChange = new BehaviorSubject<TreeData[]>(
        [{
            Id: 1,
            Name: 'Project 1',
            Description: '',
            Children: [
                {
                    Id: 3,
                    Name: 'Task 1',
                    Description: 'Task 1 description',
                    Children: [
                        {
                            Id: 5,
                            Name: 'Task 1.1',
                            Description: 'Task 1.1 description',
                            Children: []
                        }
                    ]
                },
                {
                    Id: 4,
                    Name: 'Task 2',
                    Description: 'Task 2 description',
                    Children: [
                    ]
                }
            ]
        }]
    );


}

import {Folder} from './folder.dto';

export interface Form {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    visitedAt: Date;
}

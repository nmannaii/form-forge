import {Folder} from './folder.dto';

export interface Form {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    visited_at: Date;
    folder: Folder;
}

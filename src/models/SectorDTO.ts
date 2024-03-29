import { Pagination } from './Pagination';

export type SectorsDTO = {
    data: Sector[];
    error?: string;
    pagination?: Pagination;
};

interface Sector {
    id: number;
    index: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

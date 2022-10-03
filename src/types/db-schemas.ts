import { HttpJsonSchemaOrgDraft04Schema } from "./HttpJsonSchemaOrgDraft04Schema";

export interface IContract {
    address: string;
    code_id: number;
    creator: string;
    label: string;
    ibcPortId?: string;
    migrations?: Record<string, string>;
}

export interface ICodeSchema {
    execute?: HttpJsonSchemaOrgDraft04Schema
    query?: HttpJsonSchemaOrgDraft04Schema
    instantiate?: HttpJsonSchemaOrgDraft04Schema
}

export interface ICode {
    code_id: string;
    creator: string;
    checksum: string;
    contracts: string[];
    schemas?: ICodeSchema;
    repository?: string;
    verified?: boolean;
    last_verified?: Date;
}
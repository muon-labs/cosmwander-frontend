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
    executeSchema?: HttpJsonSchemaOrgDraft04Schema
    querySchema?: HttpJsonSchemaOrgDraft04Schema
    instantiateSchema?: HttpJsonSchemaOrgDraft04Schema
}

export interface ICode {
    code_id: number;
    creator: string;
    checksum: string;
    contracts: string[];
    schema?: ICodeSchema;
    repository?: string;
    verified?: boolean;
    last_verified?: Date;
}
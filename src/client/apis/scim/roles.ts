import ResourceApiClient from '../resource-api-client';
import { ResourceList, RoleResource, ResourceData, ResourceQueryParams } from './resources';
import { FilterParams } from '../../url-params-serializer';

export interface RoleFilterParams extends FilterParams {
  name?: string;
  createdTs?: number;
  updatedTs?: number;
}

export interface RoleData extends ResourceData {
  name: string;
  displayName?: string;
  description?: string;
  scopes?: string[];
}

export interface RoleUpdateData extends ResourceData {
  name?: string;
  displayName?: string;
  description?: string;
  scopes?: string[];
}

export class RoleApiClient {
  private readonly _client: ResourceApiClient<RoleResource, RoleFilterParams>;

  constructor(resourceApiClient: ResourceApiClient<RoleResource, RoleFilterParams>) {
    this._client = resourceApiClient;
  }

  createRole(roleData: RoleData): Promise<RoleResource> {
    return this._client.createResource(roleData);
  }

  listRoles(params?: ResourceQueryParams<RoleFilterParams>): Promise<ResourceList<RoleResource>> {
    return this._client.getResourceList(params);
  }

  fetchRole(roleId: string): Promise<RoleResource> {
    return this._client.getResource(roleId);
  }

  updateRole(roleId: string, roleData: RoleUpdateData): Promise<RoleResource> {
    return this._client.updateResource(roleId, roleData);
  }

  deleteRole(roleId: string): Promise<void> {
    return this._client.deleteResource(roleId);
  }
}

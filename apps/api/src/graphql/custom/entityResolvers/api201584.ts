import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGender extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://put.your.api.here/';
    // You can access the token, data sources,
    // and the current user through 'this.context'.
  }

  willSendRequest(request: RequestOptions) {
    // Uncomment the following line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Uncomment the following line to set params token.
    // request.params.set('api_key', this.context.token);
  }

  // Add Gender
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('gender', entity);

    // Sample HTTP POST request.
    // return this.post('gender', entity);
  }

  // Delete Gender
  async deleteEntity(id: string) {
    return KapiCrud.delete('gender', id);

    // Sample HTTP DELETE request.
    // return this.delete(`gender/${id}`);
  }

  // List Gender
  async listEntity(params: any) {
    return KapiCrud.list('gender', params);

    // Sample HTTP GET request.
    // return this.get('gender', params);
  }

  // Get Gender
  async getEntity(id: string) {
    return KapiCrud.get('gender', id);

    // Sample HTTP GET request.
    // return this.get(`gender/${id}`);
  }

  // Update Gender
  async updateEntity(entity) {
    return KapiCrud.update('gender', entity);

    // Sample HTTP PATCH request.
    // return this.patch(gender, entity);
  }

  // Auto complete for Gender
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('gender');
    // TODO: @guaria generate missing attributes
    return results.map((obj) => ({ ...obj.gender }));
  }
}

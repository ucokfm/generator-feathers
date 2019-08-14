import { ArangoService, ArangoServiceOptions } from 'feathers-arango';
import { Application } from '<%= relativeRoot %>declarations';

export class <%= className %> extends ArangoService<any> {
  constructor(options: Omit<ArangoServiceOptions, 'db'>, app: Application) {
    super({
      ...options,
      db: app.get('arangoClient'),
    });
  }
}

import { Database } from 'arangojs';
import { Application } from './declarations';

export default function (app: Application) {
  const { url, databaseName, username, password } = app.get('arangodb');
  const db = new Database({ url });
  db.useDatabase(databaseName);
  db.useBasicAuth(username, password);

  app.set('arangoClient', db);
}

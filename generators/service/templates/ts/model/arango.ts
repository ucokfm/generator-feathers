import { Database } from 'arangojs';
import { Application } from '../declarations';

export default function (app: Application) {
  const collectionName = '<%= camelName %>';
  const db: Database = app.get('arangoClient');
  const collection = db.collection(collectionName);
  collection.exists().then(isExists => {
    if (isExists === false) {
      return collection.create(collectionName);
    }
  })
    .then(() => console.log(`Created ${collectionName} collection`))
    .catch(e => console.error(`Error creating ${collectionName} collection`, e));
  
  return collection;
}

import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('This db already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate db born');
    },
  });

// Added logic to a method so it accepts content and adds it to the database
export const putDb = async (content) => {
  // Database and version
  const jateDB = await openDB("jate", 1);
  // New transaction specifying db and privileges
  const tx = jateDB.transaction("jate", "readwrite");
  // Open desired object store
  const store = tx.objectStore("jate");
  // Pass in content
  const request = store.put({ id: 1, value: content });
  // Confirmation
  const result = await request;
  console.log("🚀 - database information retrieved", result);
};


//  Added logic to a method so it gets all the content from the database
export const getDb = async () => {
  //db info
  const jateDB = await openDB("jate", 1);
  //specifying db and privileges
  const tx = jateDB.transaction("jate", "readonly");
  // Open desired object store
  const store = tx.objectStore("jate");
  // Get all request
  const request = store.getAll();
  // return and confirmation
  const result = await request;
  console.log("🚀 - database information retrieved", result);
  return result.value;
};

initdb();

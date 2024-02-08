import Dexie from 'dexie';

export const db = new Dexie('myNotes');

db.version(1).stores({
  notes: '++id, title,content,status, createdAt, updatedAt' 
});
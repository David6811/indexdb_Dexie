import { db } from './db';

export function addNotes(objectId,title,content,status,createdAt,updatedAt) {
    db.notes.add({
        objectId: objectId,
        title: title,
        content: content,
        status: status,
        createdAt: createdAt,
        updatedAt:updatedAt,
    });
  }
import { db } from '../firebase/firebase-config';

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];
  debugger;
  notesSnap.forEach((snapHijo) => {
    notes.push({
      id: snapHijo,
      ...snapHijo.data(),
    });
  });

  return notes;
};

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import 'animate.css';

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  const activeId = useRef(note.id);
  const activeUrl = useRef(note.url);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }

    if (note.url !== activeUrl.current) {
      reset(note);
      activeUrl.current = note.url;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting({ id }));
  };

  return (
    <div className="notes__main-content animate__animated animate__fadeIn">
      <NotesAppBar />

      <div className="notes__content">
        <input
          className="notes__title-input"
          type="text"
          placeholder="Some awesome title"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div>
            <img className="notes__image" src={note.url} alt="space" />
          </div>
        )}
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

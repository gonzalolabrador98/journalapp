import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handlePictureUpload = () => {
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file));
    }
  };

  const handleSave = () => {
    dispatch(startSaveNote(active));
    console.log(active);
  };

  return (
    <div className="notes__appbar">
      <span>6 de octubre 2021</span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <div>
        <button type="button" className="btn" onClick={handlePictureUpload}>
          Picture
        </button>
        <button type="button" className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

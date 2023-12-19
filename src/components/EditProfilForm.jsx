// EditProfileForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsername } from '../redux/api/callAuth';

const EditProfileForm = ({ onCancel }) => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [editedUsername, setEditedUsername] = useState(user.userName || "");
  
 

  const handleSaveButtonClick = async () => {
    await updateUsername(token, editedUsername, dispatch);
    // Mettez à jour d'autres informations si nécessaire

    // Réinitialisez le champ d'édition et revenez à l'affichage du nom d'utilisateur
    setEditedUsername("");
    onCancel();
  };

  return (
    <div>
      <label htmlFor="editedUsername">Username:</label>
      <input
        type="text"
        id="editedUsername"
        value={editedUsername}
        onChange={(e) => setEditedUsername(e.target.value)}
      />      
      <button onClick={handleSaveButtonClick}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditProfileForm;
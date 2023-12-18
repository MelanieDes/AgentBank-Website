// UserProfile.js
import React, { useEffect, useState } from 'react';
import EditProfileForm from './EditProfilForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../redux/api/callAuth';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await fetchUserProfile(dispatch);
    };

    fetchData();
  }, [dispatch]);

  
  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <EditProfileForm onCancel={() => setIsEditing(false)} />
        ) : (
          <div>
            <h1>Welcome back<br />{user.userName}</h1>
            <button className="edit-button" onClick={handleEditButtonClick}>
              Edit Name
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default UserProfile;

import React from 'react';

interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
}

const UserCard: React.FC<UserProps> = ({ firstName, lastName, avatar }) => {
  return (
    <div className="user-card">
      <img src={avatar} alt={`${firstName} ${lastName}`} />
      <div className="user-details">
        <h3>
          {firstName} {lastName}
        </h3>
      </div>
    </div>
  );
};

export default UserCard;

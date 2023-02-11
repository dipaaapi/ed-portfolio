import React from 'react';

interface Props {
    id: string;
}

const User: React.FC<Props> = ({ id }) => {
    return (
        <div>
        <h1>User {id}</h1>
        <p>This is the user detail page for user with id: {id}</p>
        </div>
    );
};

export default User;
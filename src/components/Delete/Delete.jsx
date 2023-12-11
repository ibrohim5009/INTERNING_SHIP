import React from 'react';
import axios from 'axios';

function Delete({ id, handleClick }) {
  const deleteuser = async () => {
    try {
      const response = await axios.delete(
        `users/${id}/`
      );
      if (!response.status === 204) {
        console.log('Error happened');
      }
      handleClick();
    } catch (error) {
      console.error('Error happened', error);
    }
  };

  return (
    <button
      onClick={deleteuser}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Delete
    </button>
  );
}

export default Delete;

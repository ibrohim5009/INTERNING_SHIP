import axios from "axios";
import React, { useEffect, useState } from "react";
import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";
import ADDCRUD from "../ADDCRUD/ADDCRUD";

function READ() {
  const [users, setUsers] = useState();

  const REadUSE = async () => {
    try {
      const response = await axios.get('users/');
      setUsers(response.data);
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };
  function CLICK() {
    REadUSE();
  }

  useEffect(() => {
    REadUSE();
  }, []);

  return (
    <>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Id</th>
            <th className="py-2 px-4 border-b">First name</th>
            <th className="py-2 px-4 border-b">Last name</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Phone number</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Edit</th>
            <th className="py-2 px-4 border-b">Delete</th>
            <th className="py-2 px-4 border-b">Qo'shish</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.first_name}</td>
                <td className="py-2 px-4 border-b">{user.last_name}</td>
                <td className="py-2 px-4 border-b">{user.age}</td>
                <td className="py-2 px-4 border-b">{user.phone_number}</td>
                <td className="py-2 px-4 border-b">{user.location}</td>
                <td className="py-2 px-4 border-b"><Edit car={user} CLICK={CLICK} id={user.id} /></td>
                <td className="py-2 px-4 border-b"><Delete CLICK={CLICK} id={user.id} /></td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default READ;

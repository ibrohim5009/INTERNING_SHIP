import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '350px'
  },
};

function Edit({ handleClick, id }) {
  const { handleSubmit, register } = useForm(); 
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // Access the subtitle reference provided by the Modal component
    if (subtitle) {
      subtitle.style.color = '#f00';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const OnEdit = async (formDataUpdate) => {
    console.log(formDataUpdate);
    const formDataObjectUpdate = new FormData();
    formDataObjectUpdate.append("first_name", formDataUpdate.first_name);
    formDataObjectUpdate.append("last_name", formDataUpdate.last_name);
    formDataObjectUpdate.append("age", formDataUpdate.age);
    formDataObjectUpdate.append("phone_number", formDataUpdate.phone_number);
    formDataObjectUpdate.append("location", formDataUpdate.location);

    try {
      await axios.put(
        `users/${id}/`,
        formDataObjectUpdate,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      closeModal();
      handleClick();
    } catch (error) {
      console.error('Error happened', error);
    }
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Modal Title</h2>
        <form className='form_post' onSubmit={handleSubmit(OnEdit)}>
          <input className='first_name' {...register("first_name")} placeholder="Enter first name" />
          <input className='last_name'  {...register("last_name")} placeholder="Enter last_name" />
          <input className='age'  {...register("age")} placeholder="Enter age" />
          <input className='phone_number'  {...register("phone_number")} placeholder="Enter phone_number" />
          <input className='location'  {...register("location")} placeholder="Enter location" />
          <button className='btn' type="submit">EDIT</button>
        </form>
      </Modal>
    </div>
  );
}

export default Edit;

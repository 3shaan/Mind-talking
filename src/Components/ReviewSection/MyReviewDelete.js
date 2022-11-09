import { Button, Modal } from 'flowbite-react';
import React from 'react';
import { HiOutlineExclamationCircle } from "react-icons/hi";

const MyReviewDelete = ({ isDelete, SetDelete }) => {
  return (
    <div>
      <Modal show={isDelete} size="md" popup={true}>
        <Modal.Header  onClick={()=>SetDelete(false)}/>
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Review?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure">Yes, I'm sure</Button>
              <Button onClick={()=>SetDelete(false)} color="gray">No, cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyReviewDelete;
import { Modal } from "flowbite-react";
import React from "react";

const BlogsModal = ({ setOpen, singleBlog, open }) => {
  return (
    <div>
      <Modal show={open}>
        <Modal.Header onClick={()=>setOpen(false)}>{singleBlog?.name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {singleBlog?.ans}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BlogsModal;

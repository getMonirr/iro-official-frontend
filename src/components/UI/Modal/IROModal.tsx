import { Modal } from "antd";
import React from "react";

interface IModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}

const IROModal = ({
  isModalOpen,
  setIsModalOpen,
  children,
  title,
}: IModalProps) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        style={{ top: 20 }}
        className="w-full h-full"
        footer={null}
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default IROModal;

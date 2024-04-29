"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";

interface IQuestion {
  key: number;
  value: string;
}
interface IOpen {
  isOpen: boolean;
  onOpen: () => void; // Function with no parameters and no return value
  onOpenChange: (isOpen: boolean) => void; // Function that takes a boolean parameter
  data: any;
}

const JobModal = ({ isOpen, onOpenChange, data }: IOpen) => {
  const [responses, setResponses] = useState<string[]>(
    Array(data.questions.length).fill("")
  );

  const handleResponseChange = (index: number, response: string) => {
    const newResponses = [...responses];
    newResponses[index] = response;
    console.log(newResponses);
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    // Handle form submission here, you can use FormData API or any other method
    console.log("Responses:", responses);
    // Close the modal
    onOpenChange(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      size="5xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>{data.title}</ModalHeader>
            <ModalBody>
              <p>{data.text}</p>
              <form onSubmit={handleSubmit}>
                {Object.entries(data.questions).map(
                  ([questionKey, question]) => (
                    <div key={questionKey} className="mb-2">
                      <label
                        htmlFor={`question-${questionKey}`}
                        className="block mb-1"
                      >
                        {question}
                      </label>
                      <Textarea
                        id={`question-${questionKey}`}
                        className="w-full"
                        minRows={5}
                        value={responses[questionKey]}
                        onChange={(e) =>
                          handleResponseChange(questionKey, e.target.value)
                        }
                      />
                    </div>
                  )
                )}
                <div className="flex justify-end mt-4">
                  <Button color="danger" variant="light" onClick={onClose}>
                    닫기
                  </Button>
                  <Button color="primary" type="submit">
                    지원하기
                  </Button>
                </div>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default JobModal;

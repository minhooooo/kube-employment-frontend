"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Textarea,
} from "@nextui-org/react";

interface IJob {
  id: string;
  index: number;
  title: string;
  name: string;
  writeDate: string;
  updateDate: string;
  text: string;
  questions: Record<string, string>;
}

interface IOpen {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onOpen: () => void;
  data: IJob;
}

const JobModal = ({ isOpen, onOpenChange, data }: IOpen) => {
  // Initialize responses based on the questions object keys
  const [responses, setResponses] = useState<Record<string, string>>(
    Object.keys(data.questions).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  const handleResponseChange = (questionKey: string, response: string) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionKey]: response,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the form from submitting traditionally
    console.log("Responses:", responses);
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
        <>
          <ModalHeader>{data.title}</ModalHeader>
          <ModalBody>
            <p>{data.text}</p>
            <form onSubmit={handleSubmit}>
              {Object.entries(data.questions).map(
                ([questionKey, questionText]) => (
                  <div key={questionKey} className="mb-2">
                    <label
                      htmlFor={`question-${questionKey}`}
                      className="block mb-1"
                    >
                      {questionText}
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
                <Button
                  color="danger"
                  variant="light"
                  onClick={() => onOpenChange(false)}
                >
                  Close
                </Button>
                <Button color="primary" type="submit">
                  Apply
                </Button>
              </div>
            </form>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default JobModal;

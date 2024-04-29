"use client";
import useSWR from "swr";
import React, { useState } from "react";
import { Card, useDisclosure } from "@nextui-org/react";
import JobModal from "@/components/JobModal";
import { getJobList } from "./action";

interface IJob {
  id: string;
  index: string;
  title: string;
  name: string;
  writeDate: string;
  updateDate: string;
  text: string;
  questions: string[];
}

export default function Home() {
  const { data: jobList, isLoading } = useSWR("getJobList", getJobList);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedJob, setSelectedJob] = useState<IJob | null>(null);

  const handleCardClick = (job: IJob) => {
    setSelectedJob(job); // Set the selected job
    onOpen();
    // Open the modal
  };

  if (isLoading) return <p>데이터 가져오는 중입니다! 잠시만 기다려주세요</p>;

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="text-5xl font-extrabold my-10">채용 공고</div>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobList.map((job: IJob) => (
          <Card
            key={job.id}
            className="p-4 border-3 border-blue-400 hover:shadow-xl transition-shadow duration-300"
            isPressable
            shadow="none"
            onPress={() => handleCardClick(job)}
          >
            <div className="font-bold text-lg mb-2">{job.title}</div>
            <p className="text-gray-800">{job.text}</p>
            <p className="text-gray-600 text-sm">
              {new Date(job.writeDate).toLocaleString()}
            </p>
          </Card>
        ))}
      </div>
      {selectedJob && (
        <JobModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          data={selectedJob}
        />
      )}
    </main>
  );
}

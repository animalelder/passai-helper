"use client";

import { useState } from "react";
import Image from "next/image";

import quickTodoTasks from "@/assets/dashboard/quick-actions-todo.png";
import quickActions from "@/assets/dashboard/quick-actions-urgent.png";

const QuickActions = () => {
  const [image, setImage] = useState(quickActions);

  const handleChangeImage = () => {
    setImage((prev) => (prev === quickActions ? quickTodoTasks : quickActions));
  };

  // TODO: the urgent placeholder image is not aligned with the to do tasks image, so be aware of that
  // Hopefully there is time to replace these with actual components, but if not...the images need to be aligned properly.
  // Look at the PLUS button in the bottom right corner. It shifts between the two images.

  return (
    <div className="flex min-h-[350px] min-w-[480px] flex-col items-start justify-start">
      <h2 className="mb-4 font-heading text-xl font-bold text-[#233327]">
        Quick Actions
      </h2>

      <Image
        src={image}
        alt="Urgent Button"
        onClick={handleChangeImage}
        className="m-2 cursor-pointer"
      />
    </div>
  );
};

export default QuickActions;
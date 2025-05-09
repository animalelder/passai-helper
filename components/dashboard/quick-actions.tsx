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
    <div className="flex flex-col justify-start items-start min-w-[480px] min-h-[350px]">
      <h2 className="mb-4 font-heading font-bold text-[#233327] text-xl">
        Quick Actions
      </h2>

      <Image
        src={image}
        alt="Urgent Button"
        onClick={handleChangeImage}
        unoptimized
        className="m-2 w-[420px] cursor-pointer"
      />
    </div>
  );
};

export default QuickActions;
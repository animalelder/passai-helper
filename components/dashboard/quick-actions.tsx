import Image from "next/image";

import todoButton from "@/assets/dashboard/todo-button.png";
import todoItems from "@/assets/dashboard/todo-items.png";
import urgentButton from "@/assets/dashboard/urgent-button.png";

const QuickActions = () => {
  return (
    <div className="flex min-h-[350px] min-w-[480px] flex-col">
      <h2 className="mb-4 text-xl font-bold text-darkblue-104">Quick Actions</h2>
      <div className="m-4 mx-auto flex h-60 w-md flex-wrap justify-evenly">
        <Image
          src={urgentButton}
          alt="Urgent Button"
          className="m-2"
        />
        <Image
          src={todoButton}
          alt="Todo Button"
          className="m-2"
        />
        <Image
          src={todoItems}
          alt="Todo Items"
          className="m-2 mx-auto"
        />
      </div>
    </div>
  );
};

export default QuickActions;

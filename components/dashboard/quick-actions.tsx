import Image from "next/image";

import quickActions from "@/assets/dashboard/quick-actions.png";

const QuickActions = () => {
  return (
    <div className="flex min-h-[350px] min-w-[480px] flex-col items-start justify-start">
      <h2 className="mb-4 font-heading text-xl font-bold text-[#233327]">
        Quick Actions
      </h2>

      <Image
        src={quickActions}
        alt="Urgent Button"
        className="m-2 cursor-pointer"
      />
    </div>
  );
};

export default QuickActions;

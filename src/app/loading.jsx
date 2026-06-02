import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex flex-col justify-center h-screen items-center gap-2">
      <Spinner size="xl" className="w-10 text-indigo-600" />
    </div>
  );
};
export default loading;

interface SuccessProps {
  successMessage: string;
}

const Success = ({ successMessage }: SuccessProps) => {
  return (
    <div className="bg-green-100 dark:bg-[#142a2c] rounded mb-4">
      <p className="text-[#142a2c] font-medium dark:text-[#99d8ae] text-sm p-4 text-center">
        {successMessage}
      </p>
    </div>
  );
};

export default Success;

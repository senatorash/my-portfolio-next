interface SuccessProps {
  errorMessage: string;
}

const Success = ({ errorMessage }: SuccessProps) => {
  return (
    <div className="bg-green-100 dark:bg-[#142a2c] rounded mb-4">
      <p className="text-[#142a2c] font-medium dark:text-[#99d8ae] text-sm p-4 text-center">
        {errorMessage}
      </p>
    </div>
  );
};

export default Success;

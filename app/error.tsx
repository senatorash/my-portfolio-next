"use client";

interface ErrorProps {
  errorMessage: string;
}

const error = ({ errorMessage }: ErrorProps) => {
  return (
    <div className="bg-[#f9dedc] dark:bg-[#341b2a] rounded mb-4">
      <p className="text-[#942c27] dark:text-[#cd8b84] font-medium text-sm p-4 text-center">
        Something went wrong: {errorMessage}
      </p>
    </div>
  );
};

export default error;

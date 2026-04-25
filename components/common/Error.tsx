interface ErrorProps {
  errorMessage: string;
}

const Error = ({ errorMessage }: ErrorProps) => {
  return (
    <div className="bg-[#f9dedc] dark:bg-[#341b2a] rounded mb-4">
      <p className="text-[#942c27] dark:text-[#cd8b84] font-medium text-sm p-4 text-center">
        {errorMessage}
      </p>
    </div>
  );
};

export default Error;

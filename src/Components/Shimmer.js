const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 p-4 sm:p-6 mt-6">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="w-full xs:w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[20%] bg-white p-4 shadow-md rounded-lg animate-pulse"
        >
          <div className="w-full h-40 sm:h-48 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

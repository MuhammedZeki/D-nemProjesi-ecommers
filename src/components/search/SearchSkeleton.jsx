const SearchSkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="h-[220px] w-full bg-gray-200 dark:bg-[#3c435e] rounded-t-md"></div>

      <div className="px-6 py-8 bg-gray-100 dark:bg-[#2f354a] rounded-b-md flex flex-col gap-4">
        <div className="h-5 w-3/4 bg-gray-300 dark:bg-[#475074] rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 dark:bg-[#475074] rounded"></div>
        <div className="flex gap-2">
          <div className="h-5 w-12 bg-gray-300 dark:bg-[#475074] rounded"></div>
          <div className="h-5 w-12 bg-gray-300 dark:bg-[#475074] rounded"></div>
        </div>
      </div>
    </div>
  );
};
export default SearchSkeleton;

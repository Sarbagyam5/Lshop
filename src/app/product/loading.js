function LoadingCard() {
  return (
    <div className="bg-gray-50 p-5 rounded-xl shadow w-full h-80 dark:bg-gray-900 animate-pulse">
      <div className="w-full h-32 bg-gray-200 dark:bg-gray-800 mb-5"></div>
      <div className="w-1/5 h-4 bg-gray-200 dark:bg-gray-800 rounded mb-3"></div>
      <div className="w-2/3 h-5 bg-gray-200 dark:bg-gray-800"></div>
      <div className="w-full h-8 bg-gray-200 dark:bg-gray-800 my-3"></div>
      <div className="w-1/3 h-6 bg-gray-200 dark:bg-gray-800"></div>
    </div>
  );
}

export default function ProductsLoading() {
  return (
    <div className="pt-8 mb-10">
      <div className="flex px-8  justify-between">
        <h1 className="font-semibold text-3xl">Featured Products</h1>
      </div>
      <div className="grid grid-cols-2 dark:bg-[#1E1E1E] px-8 pt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"> 
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
      

  );
}
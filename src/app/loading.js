export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center 
      backdrop-blur-md bg-black/20 animate-fadeIn">
      
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-gray-300 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}




export const BlogSkeleton = () =>{
    return <div role="status" className="max-w-sm animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="p-4 border-b border-slate-200 pb-2 cursor-pointer">
                <div className="flex">
                    
                    <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                    
                    <div className="font-light pl-2 text-sm flex justify-center flex-col">
                        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                    </div>
                    <div className="flex justify-center flex-col pl-2">
                        <div className="h-1 w-1 rounded-full bg-slate-400"></div>
                    </div>
                    <div className="pl-2 text-sm font-thin text-slate-400  flex justify-center flex-col">
                        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                    </div>
                     
                </div>
                <div className="text-xl font-semibold pt-2">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                </div>
                <div className="text-md font-thin">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                </div>
                <div className="text-slate-500 text-xs font-thin pt-4">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                </div>
                
            </div>
        <span className="sr-only">Loading...</span>
    </div>
    
    
}
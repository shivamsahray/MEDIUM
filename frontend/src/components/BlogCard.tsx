import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: string
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-slate-200 pb-2 cursor-pointer">
        <div className="flex">
            
            <Avatar name={authorName} />
            
            <div className="font-light pl-2 text-sm flex justify-center flex-col">
            {authorName} 
            </div>
            <div className="flex justify-center flex-col pl-2">
                <div className="h-1 w-1 rounded-full bg-slate-400"></div>
            </div>
            <div className="pl-2 text-sm font-thin text-slate-400  flex justify-center flex-col">
            {publishedDate}
            </div>
             
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-xs font-thin pt-4">
            {`${Math.ceil(content.length/100)} min read`}
        </div>
        
    </div>
    </Link>
}

export function Avatar({name}: {name: string}) {
    return (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>
        )
}
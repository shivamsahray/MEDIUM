import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"


export const FullBlog = ({blog }: {blog: Blog}) => {
    return <div >
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 pt-10 w-full max-w-screen-lg">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Published On 25th March 2024
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 pl-4">
                    <div className="text-slate-500 text-lg">
                        Author
                    </div>
                    <div className="flex">
                        <div className=" pr-1 flex flex-col justify-center">
                            <Avatar name={blog.author.name || "Anonymous"} />
                        </div>                      
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}
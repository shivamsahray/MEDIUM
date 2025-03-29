import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSckelton";
import { useBlogs } from "../hooks"

 
export const Blogs =() =>{
    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>
            <Appbar />
            <div className="flex justify-center flex-col">
                <div className="flex justify-center">
                <BlogSkeleton />
                </div>
                <div className="flex justify-center">
                <BlogSkeleton />
                </div>
                <div className="flex justify-center">
                <BlogSkeleton />
                </div>
                
            </div>
        </div>
    }
    return <div className="w-full">
    <Appbar />

    <div className="flex justify-center">
        
        <div className=" max-w-xl">
            {blogs.map(blog =><BlogCard
                id= {blog.id} 
                authorName= {blog.author.name || "Anonymous"} 
                title={blog.title} 
                content={blog.content} 
                publishedDate={"3rd March, 2025"} /> )}
        
        </div>

    </div>
    </div>
} 
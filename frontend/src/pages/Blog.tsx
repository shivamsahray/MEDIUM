import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSckelton";
import { Appbar } from "../components/Appbar";



export const Blog = () =>{
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if(loading){
        return<div>
            <div>
                <Appbar />
            </div>
            <div className="flex justify-center">
            <BlogSkeleton />
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}
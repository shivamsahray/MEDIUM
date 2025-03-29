import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    const navigate = useNavigate();
    return <div>
        <Appbar />
        <div className="flex justify-center w-full pt-6">
            <div className="max-w-screen-lg w-full">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:blue-ring-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title"/>
            </div>
            
        </div>
        <div className="flex justify-center w-full pt-6">
            <div className="max-w-screen-lg w-full">
            <Textarea onChange={(e) => {
                setDescription(e.target.value);
            }}/>
            <button onClick={async () => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title,
                    content: description
                },{
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                navigate(`/blog/${response.data.id}`)

            }} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                   Publish Blog
               </button>
            </div>
        </div>

    </div>
}

function Textarea ({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return <form>
       <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
           <div className="px-4 py-2 bg-white rounded-t-lg ">
               
               <textarea onChange ={onChange} id="comment" rows={8} className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 " placeholder="Content of Blog" required ></textarea>
           </div>
           <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
               
               
               </div>
           </div>
       
    </form>
    
}
import { SignupInput } from "@sahrayshivam/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

 

 export const Auth =({type}: {type: "signup" | "signin"}) =>{
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequests(){
        try{

            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type=== "signup" ? "signup" : "signin"}`, postInputs);
            
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }catch(e){

        }   
    }
    return(
        <div className="flex justify-center flex-col h-screen">
            <div className="flex justify-center">
                <div>
                <div className="px-10">
                    <div className=" text-3xl font-extrabold ">
                        Create an Account
                    </div>
                    <div className="text-slate-500 mt-1">
                        {type === "signin" ? "Don't have account" : "Already have an Account?"}  
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                        {type==="signup" ? "Login" :  "Sign up"} </Link>
                    </div>
                </div>
                <div className="pt-8">
                {type === "signup" ?<LabelledInput label="Name" placeholder="Enter your name" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : null}

                <LabelledInput label="Email" placeholder="Enter your email" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }} />

                <LabelledInput label="Password" type="password" placeholder="Enter your password" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
                <button onClick={sendRequests} type="button" className="mt-6 text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Login"}</button>
                </div>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType{
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){
    return(
        <div>
            <label className="block mb-2 text-sm font-semibold text-black pt-4">{label}</label>
            <input onChange={onChange} type={type ||"text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required></input>
        </div>
    )
}

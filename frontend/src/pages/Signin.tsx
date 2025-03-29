import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = () =>{
    return <div className="grid grid-cols-2 flex">
        <div>
            <Auth  type="signin"/>
        </div>
        <div className="">
            <Quote />
        </div>
    </div>
}
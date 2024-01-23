import { ArrowLeft, Bell, Mic, Search, Upload, User } from "lucide-react"
import logo from "../assets/Logo.png"
import Button from "../components/Button"
import { useState } from "react"

export default function PageHeader(){

    const [showFullWidhtSearch, setShowFullWidthSearch] = useState(false);
 
    return (
        <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 px-4">
            {/* Shrink ver daha iyi çünkü logo boyutunda bozulma istemiyorum */}
            <div className={`flex gap-4 items-center flex-shrink-0 ${showFullWidhtSearch? "hidden" : "flex"}`}>
                <a href="/">
                    <img src={logo} className="h-12" />
                </a>
            </div>
            <form className={` gap-4 flex-grow justify-center items-center ${showFullWidhtSearch? "flex" : "hidden md:flex "}`}>
                {showFullWidhtSearch && 
                <Button type="button" size="icon" variant="ghost" className="flex-shrink-0" onClick={()=> setShowFullWidthSearch(false)}>
                    <ArrowLeft/>
                </Button>
                }
                
                <div className="flex flex-grow max-w-[600px] ">
                    <input type="search" 
                    placeholder="Bi Araştır Bakalım Esad" 
                    className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
                    <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0 ">
                        <Search/>
                    </Button>
                </div>
                <Button type="button" size="icon" className="flex-shrink-0">
                    <Mic/>
                </Button>

            </form>
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidhtSearch? "hidden" : "flex"}`}>
                <Button onClick={()=>setShowFullWidthSearch(true)} size="icon" variant="ghost" className="md:hidden">
                    <Search/>
                </Button>
                <Button size="icon" variant="ghost" className="md:hidden">
                    <Mic/>
                </Button>
                <Button size="icon" variant="ghost">
                    <Upload/>
                </Button>
                <Button size="icon" variant="ghost">
                    <Bell/>
                </Button>
                <Button size="icon" variant="ghost">
                    <User/>
                </Button>
            </div>
        </div>
    )
}
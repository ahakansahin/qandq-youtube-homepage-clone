import { useState } from "react";
import {CategoryPills} from "./components/CategoryPills";
import { categories, videos } from "./data/home";
import PageHeader from "./layouts/PageHeader";
import { VideoGridItems } from "./components/VideoGridItems";
import { SideBar } from "./layouts/SideBar";

export default function App() {
const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    //Sayfayı 100% vh yaptıktan sonra 3 sekmeye bölebilirim böylece sticky problemi ortadan kalkar
    <div className="max-h-screen flex flex-col">
      <PageHeader/>
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <SideBar/>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div> 
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((video)=>(
              <VideoGridItems key={video.id} {...video}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
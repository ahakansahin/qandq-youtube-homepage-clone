import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../components/Button";

export function SideBar(){
    return <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ">
        <SmallSideBarItem Icon={Home} title="Ana Sayfa" url="/"/>
        <SmallSideBarItem Icon={Repeat} title="Hikaye" url="/hikaye"/>
        <SmallSideBarItem Icon={Clapperboard} title="Abonelikler" url="/abonelikler"/>
        <SmallSideBarItem Icon={Library} title="Kitaplık" url="/kitaplık"/>
    </aside>
}



type SmallSideBarItemProps={
    Icon: ElementType
    title: string
    url: string

}

function SmallSideBarItem({Icon, title, url}: SmallSideBarItemProps){
    return (
        <a href={url} className={twMerge(buttonStyles({variant: "ghost"}),"py-4 px-1 flex flex-col items-center rounded-lg gap-1")}>
            <Icon className="w-6 h-6" />
            <div className="text-sm">{title}</div>
        </a>
    )
}
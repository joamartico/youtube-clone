import { ExpandMoreOutlined, History, Home, OndemandVideo, Subscriptions, ThumbUpOutlined, VideoLibrary, WatchLater, Whatshot } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="sidebar__options">

            <SidebarOption Icon={Home} title="Home" isSelected={true} />
            <SidebarOption Icon={Whatshot} title="Trending" isSelected={false} />
            <SidebarOption Icon={Subscriptions} title="Subscriptions" isSelected={false} />

            <hr className="sidebar__division"/>

            <SidebarOption Icon={VideoLibrary} title="Library" isSelected={false} />
            <SidebarOption Icon={History} title="History" isSelected={false} />
            <SidebarOption Icon={OndemandVideo} title="Your Videos" isSelected={false} />
            <SidebarOption Icon={WatchLater} title="Watch Later" isSelected={false} />
            <SidebarOption Icon={ThumbUpOutlined} title="Liked Videos" isSelected={false} />
            <SidebarOption Icon={ExpandMoreOutlined} title="Show More" isSelected={false} />



            <SidebarOption Icon={ExpandMoreOutlined} title="Show More" isSelected={false} />
            <SidebarOption Icon={ExpandMoreOutlined} title="Show More" isSelected={false} />
            <SidebarOption Icon={ExpandMoreOutlined} title="Show More" isSelected={false} />
            <SidebarOption Icon={ExpandMoreOutlined} title="Show More" isSelected={false} />
            <SidebarOption Icon={ExpandMoreOutlined} title="Show More" isSelected={false} />

            </div>
        </div>
    )
}

export default Sidebar
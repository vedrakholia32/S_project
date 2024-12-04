import React from "react";
import {
  HeartIcon,
  HomeIcon,
  LogOutIcon,
  MessageCircle,
  PlusSquareIcon,
  Search,
  Sidebar,
  TrendingUp,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "@/redux/authSlice";


const LeftSidebar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch()

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setAuthUser(null))
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.respose.data.message);
    }
  };

  const sidebarHandler = (textType) => {
    if (textType == "Logout") logoutHandler();
  };


  const sidebarItems = [
    { icon: <HomeIcon />, text: "Home" },
    { icon: <Search />, text: "Search" },
    { icon: <TrendingUp />, text: "Explore" },
    { icon: <MessageCircle />, text: "Messages" },
    { icon: <HeartIcon />, text: "Notification" },
    { icon: <PlusSquareIcon />, text: "Create" },
    {
      icon: (
        <Avatar className="w-7 h-7">
          <AvatarImage
            className="rounded-full"
            src={user?.profilePicture}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
      text: "Profile",
    },
    { icon: <LogOutIcon />, text: "Logout" },
  ];

  return (
    <div className="fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[16%] h-screen">
      <div className="flex flex-col">
        <h1 className="my-8 pl-3 font-bold">LOGO</h1>
        <div>
          {sidebarItems.map((item, index) => {
            return (
              <div
                onClick={() => sidebarHandler(item.text)}
                key={index}
                className="flex items-center space-x-2 p-3 m-3 relative hover:bg-gray-100 cursor-pointer rounded-lg "
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default LeftSidebar;

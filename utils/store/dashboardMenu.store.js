import { create } from "zustand"
import {
	PencilAltIcon,
	DocumentDuplicateIcon,
	HomeIcon,
} from "@heroicons/react/outline"

const useDashboardMenuStore = create((set) => ({
	navigation: [
	  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: false },
	  {
		name: "New Post",
		href: "/dashboard/newpost",
		icon: PencilAltIcon,
		current: false,
	  },
	  {
		name: "Posts",
		href: "/dashboard/posts",
		icon: DocumentDuplicateIcon,
		current: false,
	  },
	],
	setCurrent: (name) =>
	  set((state) => ({
		navigation: state.navigation.map((item) => ({
		  ...item,
		  current: item.name === name,
		})),
	  })),
	setCurrentByRoute: () =>
	  set((state) => ({
		navigation: state.navigation.map((item) => ({
		  ...item,
		  current: window.location.pathname.startsWith(item.href),
		})),
	  })),
  }));
  
  

export default useDashboardMenuStore

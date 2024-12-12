import { 
    Contact2, 
    FileCode2, 
    FolderArchive, 
    Home, 
    ListCollapse, 
    MapPin, 
    Navigation, 
    PlusCircle, 
    ShoppingCart 
  } from "lucide-react";
  
  export const navLinks = [
    { name: "Home", route: "/", icon: Home }, 
    {
      name: "Listing",
      subLinks: [
        { name: "List pages", route: "/list pages", icon: ListCollapse }, 
        { name: "Detail pages", route: "/detail pages", icon: FileCode2 },
        {
          name: "OpenStreet Map",
          links: [
            { name: "List with map", route: "/list with map", icon: MapPin }, 
            { name: "List side map", route: "/list side map", icon: Navigation }, 
            { name: "List Masonry map", route: "/list masonry map", icon: MapPin }, 
          ],
        },
        { name: "Submit Restaurant", route: "/submit restaurant", icon: PlusCircle }, 
        { name: "Submit Rider", route: "/submit rider", icon: PlusCircle }, 
        { name: "Order", route: "/order", icon: ShoppingCart },
      ],
      route: "#",
      icon: ListCollapse,
    },
    { name: "Other Pages", route: "/other pages", icon: FileCode2 }, 
    { name: "Archive", route: "/archive", icon: FolderArchive }, 
    { name: "Contact", route: "/contact", icon: Contact2 }, 
  ];
  
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
            { name: "List with map", route: "/list ", icon: MapPin }, 
            { name: "List side map", route: "/list ", icon: Navigation }, 
            { name: "List Masonry map", route: "/list_map", icon: MapPin }, 
          ],
        },
        { name: "Submit Restaurant", route: "/submit_restaurant", icon: PlusCircle }, 
        { name: "Submit Rider", route: "/submit_rider", icon: PlusCircle }, 
        { name: "Order", route: "/order", icon: ShoppingCart },
      ],
      route: "#",
      icon: ListCollapse,
    },
    { name: "Other Pages", route: "/other_pages", icon: FileCode2 }, 
    { name: "Archive", route: "/archive", icon: FolderArchive }, 
    { name: "Contact", route: "/contact", icon: Contact2 }, 
  ];
export  const SearchLinks=[
  {name:'Sushi',route:'./list '},
  {name:'Burger',route:'./list '},
  {name:'Chinese',route:'./list '},
  {name:'Pizza',route:'./list '}
]
export const data = [
  { id: 1, title: 'Pizza', price: 40, image: '/images/pizza.png', rating: 98 },
  { id: 2, title: 'Japanese', price: 50, image: '/images/pizza.png', rating: 87 },
  { id: 3, title: 'Burgers', price: 55, image: '/images/pizza.png', rating: 55 },
  { id: 4, title: 'Vegetarian', price: 40, image: '/images/pizza.png', rating: 55 },
  { id: 5, title: 'Bakery', price: 60, image: '/images/pizza.png', rating: 65 },
  { id: 6, title: 'Chinese', price: 45, image: '/images/pizza.png', rating: 70 },
];
export const Restaurant_List=[
  { 
    id:1,
    image: "/images/rest.png",
    kitchen: "Italian",
    name: "La Monnalisa",
    address: "8 Patriot Square E2 9NF",
    discount: "-35%",
    price: "$30",
    rating: "9.5",
  },
  {
    id:2,
    image:'/images/rest2.jpg',
    kitchen:'Mexican',
    name:'Alliance',
    address:'27 Old Gloucester St, 4563',
    discount:'-40%',
    price:'30$',
    rating:'8.0'
  },
  {
    id:3,
    image:'/images/rest1.jpg',
    kitchen:'Sushi-Japanese',
    name:'Sushi Gold',
    address:'Old Shire Ln EN9 3RX',
    discount:'-25%',
    price:'$20',
    rating:'9.0'
  },
  {
    id:4,
    image:'/images/rest3.jpg',
    kitchen:'Vegetarian',
    name:'Mr.Pepper',
    address:'Old Shire Ln EN9 3RX',
    discount:'-25%',
    price:'$20',
    rating:'9.0'
  },
  {
    id:5,
    image:'/images/rest.png',
    kitchen:'Vegetarian',
    name:'Mr.Pepper',
    address:'Old Shire Ln EN9 3RX',
    discount:'-25%',
    price:'$20',
    rating:'9.0'
  },
  {
    id:6,
    image:'/images/rest.png',
    kitchen:'Vegetarian',
    name:'Mr.Pepper',
    address:'Old Shire Ln EN9 3RX',
    discount:'-25%',
    price:'$20',
    rating:'9.0'
  }
 

]
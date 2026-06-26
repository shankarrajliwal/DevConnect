const developers = [
  {
    id: 1,
    name: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/150?img=11",
    skills: ["React", "Node", "MongoDB"],
    followers: 340,
    bio: "Full Stack Developer | Open Source Lover",
    contact: {
      github: "https://github.com",
      whatsapp: "https://wa.me/919876543210",
      instagram: "https://instagram.com/rahul.dev",
      phone: "tel:+919876543210"
    },
    projects: [
      {
        id: 101,
        title: "E-Commerce Store",
        description: "Ek full online shopping website jisme products browse, cart aur checkout hota hai.",
        tools: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
      },
      {
        id: 102,
        title: "Chat Application",
        description: "Real time chat app jisme multiple users ek saath baat kar sakte hain.",
        tools: ["React", "Socket.io", "Node.js"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=200&fit=crop"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Singh",
    avatar: "https://i.pravatar.cc/150?img=5",
    skills: ["React", "Python", "Firebase"],
    followers: 210,
    bio: "Frontend Dev | UI/UX Enthusiast",
    contact: {
      github: "https://github.com",
      whatsapp: "https://wa.me/919876543211",
      instagram: "https://instagram.com/priya.dev",
      phone: "tel:+919876543211"
    },
    projects: [
      {
        id: 201,
        title: "Portfolio Website",
        description: "Personal portfolio website jisme projects aur skills showcase hoti hain.",
        tools: ["React", "CSS", "Firebase"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop"
      },
      {
        id: 202,
        title: "Weather App",
        description: "Kisi bhi city ka live weather dekhne ki app with temperature aur forecast.",
        tools: ["React", "OpenWeather API", "CSS"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=200&fit=crop"
      }
    ]
  },
  {
    id: 3,
    name: "Arjun Mehta",
    avatar: "https://i.pravatar.cc/150?img=15",
    skills: ["Vue", "Node", "PostgreSQL"],
    followers: 180,
    bio: "Backend Developer | API Specialist",
    contact: {
      github: "https://github.com",
      whatsapp: "https://wa.me/919876543212",
      instagram: "https://instagram.com/arjun.dev",
      phone: "tel:+919876543212"
    },
    projects: [
      {
        id: 301,
        title: "Task Manager",
        description: "Todo aur task management app jisme tasks add, complete aur delete ho sakte hain.",
        tools: ["Vue.js", "Node.js", "PostgreSQL"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=400&h=200&fit=crop"
      },
      {
        id: 302,
        title: "Blog Platform",
        description: "Ek blogging website jahan log articles likh aur publish kar sakte hain.",
        tools: ["Vue.js", "Express", "PostgreSQL"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=200&fit=crop"
      }
    ]
  },
  {
    id: 4,
    name: "Sneha Patel",
    avatar: "https://i.pravatar.cc/150?img=9",
    skills: ["React", "TypeScript", "GraphQL"],
    followers: 290,
    bio: "Frontend Architect | TypeScript Lover",
    contact: {
      github: "https://github.com",
      whatsapp: "https://wa.me/919876543213",
      instagram: "https://instagram.com/sneha.dev",
      phone: "tel:+919876543213"
    },
    projects: [
      {
        id: 401,
        title: "Social Media Dashboard",
        description: "Analytics dashboard jisme social media stats track hoti hain.",
        tools: ["React", "TypeScript", "GraphQL"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=200&fit=crop"
      },
      {
        id: 402,
        title: "Recipe Finder App",
        description: "Ingredients daalo aur recipes dhundho instantly.",
        tools: ["React", "TypeScript", "REST API"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=200&fit=crop"
      }
    ]
  },
  {
    id: 5,
    name: "Vikram Nair",
    avatar: "https://i.pravatar.cc/150?img=18",
    skills: ["Python", "Django", "Machine Learning"],
    followers: 420,
    bio: "ML Engineer | Python Expert | Data Science",
    contact: {
      github: "https://github.com",
      whatsapp: "https://wa.me/919876543214",
      instagram: "https://instagram.com/vikram.dev",
      phone: "tel:+919876543214"
    },
    projects: [
      {
        id: 501,
        title: "AI Image Classifier",
        description: "Machine learning model jo images ko automatically classify karta hai.",
        tools: ["Python", "TensorFlow", "Django"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=200&fit=crop"
      },
      {
        id: 502,
        title: "Stock Price Predictor",
        description: "ML model jo stock prices predict karta hai historical data se.",
        tools: ["Python", "Pandas", "Scikit-learn"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop"
      }
    ]
  },
  {
    id: 6,
    name: "Ananya Roy",
    avatar: "https://i.pravatar.cc/150?img=25",
    skills: ["React Native", "Flutter", "Firebase"],
    followers: 315,
    bio: "Mobile App Developer | Cross Platform Expert",
    contact: {
      github: "https://github.com",
      whatsapp: "https://wa.me/919876543215",
      instagram: "https://instagram.com/ananya.dev",
      phone: "tel:+919876543215"
    },
    projects: [
      {
        id: 601,
        title: "Fitness Tracker App",
        description: "Mobile app jisme daily workout aur calories track hoti hain.",
        tools: ["React Native", "Firebase", "Redux"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop"
      },
      {
        id: 602,
        title: "Food Delivery App",
        description: "Restaurant dhundho, order karo, track karo — sab ek app mein.",
        tools: ["Flutter", "Firebase", "Google Maps API"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=200&fit=crop"
      }
    ]
  },
  {
    id: 7,
    name: "Rohan Gupta",
    avatar: "https://i.pravatar.cc/150?img=33",
    skills: ["Next.js", "React", "Tailwind"],
    followers: 275,
    bio: "Next.js Developer | Performance Obsessed",
    contact: {
      github: "https://github.com",
      whatsapp: "https://wa.me/919876543216",
      instagram: "https://instagram.com/rohan.dev",
      phone: "tel:+919876543216"
    },
    projects: [
      {
        id: 701,
        title: "News Aggregator",
        description: "Multiple sources se news ek jagah — category wise filter ke saath.",
        tools: ["Next.js", "Tailwind", "News API"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop"
      },
      {
        id: 702,
        title: "Job Board",
        description: "Developers ke liye job listings platform with filters aur apply option.",
        tools: ["Next.js", "PostgreSQL", "Tailwind"],
        github: "https://github.com",
        live: "https://example.com",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=200&fit=crop"
      }
    ]
  }
]

export default developers
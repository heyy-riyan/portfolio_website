import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  firebase,
  unity,
  threejs,
  csharp,
  illustrator,
  photoshop,
  java,
  python,
  sql,
  js,
  ysLogo,
  targetC,
  graphicLogo,
  targetM,
  mGraphics,
  clothingStore,
  monsters,
  zombie,
  invanders,
  fruit,
  LyricsDB,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: " Beginner React Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Machine Learning ",
    icon: mobile,
  },
  {
    title: "Python",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
];

const experiences = [
  {
    title: "KPMG AU - Data Analytics Job Simulation(Intern)",
    company_name: "Forage",
    icon: targetC,
    iconBg: "#E6DEDD",
    date: "October 2023 - November 2023",
    points: [
      "Over the period of November 2023,I has completed practical tasks in: Data Quality Assessment, Data Insights and Presentation",
      "Presenting & Communicating the insights of the data using data visualization tools such as Tableau, Power BI, etc.",
    ],
  },
  {
    title: "Internship - Data Science & Business Analytics",
    company_name: "The Sparks Foundation",
    icon: targetM,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Learning and implementing various Machine Learning algorithms such as Linear Regression, Logistic Regression, Decision Tree, Random Forest, K-Means Clustering, etc.",
      "Presenting & Communicating the insights of the data using data visualization tools such as Tableau, Power BI, etc.",
    ],
  },
  {
    title: "Head of Operations",
    company_name: "IEEE System, Man and Cybernetics Society MJCET",
    icon: mGraphics,
    iconBg: "#E6DEDD",
    date: "Mar 2023 -Oct 2023",
    points: [
      "Responsible for planning, coordinating, and scheduling the required functions of any event.",
      "Also ensure that day-to-day activities run smoothly and supervise the availability of venues, resources, and equipments for an event for the particular Organization .",
    ],
  },
  {
    title: "Tech Team Member",
    company_name: "IEEE System,Man and Cybernetics Society MJCET",
    icon: graphicLogo,
    iconBg: "#E6DEDD",
    date: "May 2022 -Mar 2023",
    points: [
      "The technical team is responsible for projects management and development through their skills and innovative ideas. ",
      " Playing an integral role in conducting technical events. They also provide guidance and help the overall technical development of the team members.",
    ],
  },
  
  ];

const projects = [
  {
    name: "Autonomous Vehicle Using Raspberry Pi",
    description:
      "The system has an objective to identify the lane marks. Its intent is to obtain secure environment and improved traffic surroundings. The function of the proposed system can range from displaying road line positions to the driving person on any exterior display to more convoluted application like detecting switching of lanes in the near future so that one can prevent concussions caused on the highways..",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Canny Edge Detection",
        color: "pink-text-gradient",
      },
    ],
    image: clothingStore,
    source_code_link: "https://github.com/heyy-riyan/Autonomous-Vehicle-using-rassberry-Pie-4-3B-",
    source_web_link: "https://user-images.githubusercontent.com/111027758/280464581-b2d009d7-160b-4915-981b-76c686911928.mp4",
  },
  {
    name: "Custom Object Detection Using YOLO v8 ",
    description:
      "A state-of-the-art object detection algorithm, to identify and locate objects that are unique to your specific needs. This tailored approach is invaluable in various domains, from wildlife conservation to industrial automation and beyond. In this introduction, we'll explore the key steps involved in custom object detection and how YOLOv8 can be harnessed to achieve highly accurate results, even when working with specialized, custom datasets.",
    tags: [
      {
        name: "YOU ONLY LOOK ONCE v8",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: monsters,
    source_code_link: "https://github.com/heyy-riyan/Custom-Obj-Detection-Using-Yolo-V8",
    source_web_link: "https://raw.githubusercontent.com/heyy-riyan/Custom-Obj-Detection-Using-Yolo-V8/main/runs/detect/predict/1.jpeg",
  },
  {
    name: "Customer segmentation ",
    description: "Customer segmentation is a technique in which we divide the customers based on their purchase history, gender, age, interest, etc. It is useful to get this information so that the store can get help in personalize marketing and provide customers with relevant deals..",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "ML, Data Science",
        color: "green-text-gradient",
      },
    ],
    image: LyricsDB,
    source_code_link: "https://github.com/heyy-riyan/Customer-Segmentation-SMC-WorkShop",
    source_web_link: "https://github.com/heyy-riyan/Customer-Segmentation-SMC-WorkShop/blob/main/README.md",
  },

  {
    name: " Handwritten Digit Recognition with CNN/ GUI ",
    description: "The handwritten digit recognition is the ability of computers to recognize human handwritten digits. It is a hard task for the machine because handwritten digits are not perfect and can be made with many different flavors. The handwritten digit recognition is the solution to this problem which uses the image of a digit and recognizes the digit present in the image & has graphical user interface",
    tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Graphical User Interface",
        color: "green-text-gradient",
      },
    ],
    image: invanders,
    source_code_link: "https://github.com/heyy-riyan/-Handwritten-Digit-Recognition",
    source_web_link: "https://github.com/heyy-riyan/-Handwritten-Digit-Recognition/blob/main/README.md",
  },
  {
    name: "Agventure",
    description: "Here we have a system for farmers where we deal with the lagging parts of technology where agricultural tech is left unnoticed. Here we prepared a solution where we will be providing farmers with a system where he can get full and detailed analysis of his present crop and also what will be his next crop with additional functionalities such as attendance system where he can get notified of his workers presence and an online market where customer can directly access the inventory of the farmer and get an optimal pricing both for the farmer and the buyer with a secured and encrypted database which helps the farmer in data security",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask,SQL",
        color: "green-text-gradient",
      },
      {
        name: "Face Attendance",
        color: "red-text-gradient",
      },
    ],
    image:  fruit,
    source_code_link: "https://github.com/heyy-riyan/Customer-Segmentation-SMC-WorkShop",
    source_web_link: "https://github.com/heyy-riyan/Customer-Segmentation-SMC-WorkShop/blob/main/README.md",
  },
  {
    name: "Docify",
    description: "Here we have a system for patients where they can make an appointment with the doctor of their choice, book a bed in the hospital of there choice, and also get a prescription from the doctor & a Online Pharmary which has Admin, Customer as well as Wholesaler Login , has a chatbot which helps the customer to get the details of the medicine and also has a payment gateway which helps the customer to pay for the medicine and also has a secured and encrypted database which helps the customer in data security",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask,SQL",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "red-text-gradient",
      },
    ],
    image:  zombie,
    source_code_link: "https://github.com/heyy-riyan/NASKAT-Hackathon--Docify",
    source_web_link: "https://user-images.githubusercontent.com/111027758/280479083-6a53e8e4-8c7f-4b14-89fe-db81115388ed.png",
  },
  
];

export { services, technologies, experiences, projects };

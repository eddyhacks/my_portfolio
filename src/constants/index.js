import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT_1 = `Full Stack Developer`;
export const HERO_CONTENT_2 = `Cybersecurity Engineer`;
export const HERO_CONTENT_3 = `UI/UX Developer`;
export const HERO_CONTENT_4 = `FreeLancer`;

export const HERO_ABOUT = `I’m a data enthusiast who loves turning raw data into meaningful insights. Skilled in SQL, data visualization, and analytics, I uncover trends and drive smarter decisions.`;

export const ABOUT_TEXT = `I am Surya Prakash Baid, a data-driven professional with a background in civil engineering and a strong passion for data science, machine learning, and business analytics. With hands-on experience in Python, SQL, and AI-driven analytics, I have worked on projects like portfolio optimization, real-time stock market prediction, sentiment analysis, and deep learning-based classification. My expertise lies in data-driven decision-making, risk assessment, and financial analytics, and I am actively seeking roles as a Business Analyst, Data Analyst, or Analyst to apply my analytical skills in impactful ways. Let’s connect to explore opportunities in transforming data into strategic insights!`;

export const EXPERIENCES = [
  {
    year: "OCT 2024 - NOV 2024",
    role: "Data Analytics Intern",
    company: "Connecting Dreams Foundation, Remote",
    description:
      "Performed exploratory data analysis (EDA) leveraging Python and SQL on four diverse datasets to uncover 11 actionable insights. Developed six interactive Power BI dashboards to visualize key performance metrics across various health datasets.",
    technologies: ["Python", "SQL", "Power BI", "EDA", "Data Visualization"],
  },
  {
    year: "JAN 2024 - MAY 2024",
    role: "Structural Analysis Research Intern",
    company: "MIT, Manipal",
    description:
      "Analyzed seismic response of G+10 soft-story buildings using ETABS and Python, optimizing fluid viscous dampers to enhance structural stability. Reduced story shear by 48% and peak displacement by 40% through iterative damper coefficient optimization, improving building safety.",
    technologies: [
      "ETABS",
      "Python",
      "Structural Analysis",
      "Seismic Engineering",
      "Optimization",
    ],
  },
  {
    year: "SEP 2023 - OCT 2023",
    role: "Amazon Summer School Mentee",
    company: "Amazon, Remote",
    description:
      "Gained in-depth knowledge of causal inference, reinforcement learning, supervised and unsupervised learning, sequential models, probabilistic graphical models, and deep neural networks. Built a strong foundation in applying these techniques to scalable, real-world intelligent systems.",
    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Causal Inference",
      "Reinforcement Learning",
      "AI",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Vehicle Number Plate Detection",
    link: "N/A",
    image: project1,
    description:
      "Developed a number plate detection system using YOLO and PaddleOCR, achieving mAP@0.5 of 0.91. Integrated YOLO for precise plate localization and PaddleOCR for high-accuracy text recognition for improved results. Deployed as a Streamlit app, enabling real-time processing of 100+ images and videos.",
    technologies: [
      "YOLO",
      "PaddleOCR",
      "Streamlit",
      "Computer Vision",
      "Deep Learning",
    ],
  },
  {
    title: "Fish Classification",
    link: "N/A",
    image: project2,
    description:
      "Used the VGG16 model for fish classification, leveraging pre-trained features for better performance. Achieved 99.5% accuracy on the training set, demonstrating effective learning of complex patterns. Maintained 99.18% accuracy on unseen data, showcasing strong generalization in species classification.",
    technologies: [
      "VGG16",
      "Deep Learning",
      "Image Classification",
      "Python",
      "TensorFlow",
    ],
  },
  {
    title: "Bangalore House Price Prediction",
    link: "N/A",
    image: project3,
    description:
      "Built a machine learning model to predict Bangalore house prices based on location, size, and amenities. Employed feature engineering techniques and trained models using regression algorithms to improve accuracy.",
    technologies: [
      "Machine Learning",
      "Regression",
      "Python",
      "Scikit-learn",
      "EDA",
    ],
  },
  {
    title: "Sentiment Analysis",
    link: "N/A",
    image: project4,
    description:
      "Developed a sentiment analysis model to classify text sentiment as positive, neutral, or negative. Used NLP techniques and transformer-based models for improved accuracy in text classification tasks.",
    technologies: [
      "NLP",
      "Transformers",
      "Sentiment Analysis",
      "Python",
      "Hugging Face",
    ],
  },
];

export const CONTACT = {
  address: "Bangalore, karnataka, 560043",
  phoneNo: "+91 9073332551",
  email: "suryaa.baid@gmail.com",
};

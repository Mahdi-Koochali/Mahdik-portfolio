/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG and avoid animation errors
};

const greeting = {
  username: "Mahdi Koochali",
  title: "Hey, I'm Mahdi",
  subTitle: emoji(
    "An AI enthusiast 🤖 with hands-on experience as a Data Scientist and Machine Learning Engineer, especially in the field of Computer Vision. I love turning data into intelligent solutions and building real-world applications. Known for my problem-solving mindset, clear communication, and strong teamwork skills 💡🤝"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mahdi-Koochali",
  linkedin: "https://www.linkedin.com/in/mohammadmahdi-koochali-06134813a/",
  gmail: "mahdi.koochali@gmail.com",
  googleScholar: "https://scholar.google.com/citations?user=hCoq_YcAAAAJ&hl=en",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};



// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AN AI ENGINEER SPECIALIZING IN DEEP LEARNING AND COMPUTER VISION FOR BIOMEDICAL APPLICATIONS",
  skills: [
    emoji("⚡ Develop and deploy deep learning models for " +
          "complex computer vision tasks like image " +
          "segmentation and object tracking"),
    emoji("⚡ Leverage generative AI to create synthetic datasets and " +
          "build robust, multimodal analysis pipelines"),
    emoji("⚡ Translate cutting-edge AI research into scalable, " +
          "real-world applications and impactful systems")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "PyTorch",
      imageSrc: require("./assets/images/pytorch-grey.png")
    },
    {
      skillName: "TensorFlow", 
      imageSrc: require("./assets/images/tensorflow-grey.png")
    },
    {
      skillName: "C++",
      imageSrc: require("./assets/images/cplusplus-grey.png")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  {
    schoolName: "Saarland University",
    logo: require("./assets/images/UdS_logo.jpg"),
    subHeader: "Master of Science in Bioinformatics",
    duration: "November 2021 - March 2025",
    desc: "Authored Master's Thesis titled 'SAT: Segment and Track Anything for Microscopy', earning a perfect grade of 1.0/1.0.",
    descBullets: [
      "Developed a novel framework that automates cell segmentation and tracking from minimal user input (a single point or box), significantly reducing manual annotation effort in microscopy.",
      "Served for two years as an elected member of the Computer Science Students' Representative Council (Fachschaftsrat Informatik)."
    ]
  },
  {
    schoolName: "Kharazmi University",
    logo: require("./assets/images/kharazmi_logo.png"),
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2015 - April 2020",
    desc: "Achieved a perfect score (1.0/1.0) for my Bachelor's thesis, titled 'Representing UbiqLog Dataset in three different mediums (Music Generation, Narrative, Animation with Deep Reinforcement Learning)'.",
    descBullets: [
      "Thesis: Developed a system to translate daily life-log data into three creative outputs: auto-generated music, written narratives, and animations using Deep Reinforcement Learning."
    ]
  }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Deep Learning for Image Segmentation", // Core research at DFKI and Master's Thesis [cite: 9, 19, 32]
      progressPercentage: "90%" 
    },
    {
      Stack: "Object Detection & Tracking", // Experience at Sensifai and listed skills [cite: 15, 21, 38]
      progressPercentage: "85%"
    },
    {
      Stack: "Generative AI (LLMs & VLMs)", // A key modern skill listed in your CV [cite: 21, 27, 38, 39]
      progressPercentage: "75%"
    },
    {
      Stack: "Python for Data Science (PyTorch, Pandas)", // Your foundational programming toolkit [cite: 37]
      progressPercentage: "80%" 
    },
    {
      Stack: "MLOps & Developer Tools (Docker, Git, AWS)", // Your skills in deployment and version control [cite: 37, 40]
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "DFKI",
      companylogo: require("./assets/images/dfki.jpg"),
      date: "September 2021 - Present",
      desc: "As a Research Assistant at DFKI, my work focuses on developing innovative computer vision solutions for microscopic image analysis, specifically advancing cell segmentation and tracking. My research centers on pioneering weakly supervised and synthetic data generation methods to significantly reduce the laborious and costly manual annotation efforts traditionally required in cell biology, thereby enabling more efficient and scalable biomedical research.",
      descBullets: [
        "Designed and implemented cutting-edge weakly supervised approaches (such as Point2Mask, SAT, BoxTrack) that enable high-precision cell segmentation and tracking using minimal annotations like points or bounding boxes.",
        "Developed comprehensive frameworks (such as CellGenie, DeepMuCS) for synthetic data generation and cell-type aware segmentation, pushing the boundaries of analysis in complex microscopic and co-culture imaging."
      ]
    },
    {
      role: "Data Scientist",
      company: "Sensifai",
      companylogo: require("./assets/images/Sensifai_logo.png"),
      date: "November 2019 - October 2020",
      desc: "As a Data Scientist, I specialized in real-time video analysis from surveillance feeds. My primary responsibility was to develop and deliver deep learning solutions for key safety-critical applications, including fire, violence, and face detection.",
      descBullets: [
        "Owned the end-to-end development lifecycle for multiple detection projects, from initial data collection and processing to final model training and deployment.",
        "Implemented and trained a suite of advanced deep learning models (including YOLO series, RetinaNet, CenterNet, and optical flow-based networks) for object detection, face recognition, and violence detection tasks."
      ]
    },
{
      role: "AI Researcher",
      company: "IPM",
      companylogo: require("./assets/images/IPM.png"),
      date: "April 2019 - September 2020",
      desc: "During my tenure as an AI Researcher at the Institute for Research in Fundamental Sciences (IPM), I contributed to diverse projects applying deep learning to solve distinct challenges in medical and satellite imaging. This foundational research role culminated in my Bachelor's thesis, which was also completed at the institute.",
      descBullets: [
        "Applied various deep learning models to the challenge of early lung cancer detection from medical scans.",
        "Developed and implemented Super Resolution techniques to enhance the quality and detail of satellite imagery.",
        "Conducted the research for my Bachelor's thesis, which focused on representing life-log data through creative AI-driven mediums."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SIGNIFICANT PROJECTS AND EDUCATIONAL INITIATIVES I'VE CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/DLSS2019.jpg"),
      projectName: "Deep Learning Summer School 2019 (DLSS 2019)",
      projectDesc: "Founded and managed an intensive summer school program focused on advanced deep learning techniques and their applications in computer vision and AI research. Successfully organized the event with over 250 participants from diverse backgrounds. Served as both organizer and speaker, delivering lectures on cutting-edge AI methodologies and facilitating knowledge transfer in the deep learning community."
    },
    {
      image: require("./assets/images/weacademy.jpg"),
      projectName: "Weacademy",
      projectDesc: "Co-founded an educational platform and learning initiative focused on advancing knowledge and skills in technology and artificial intelligence. Led the development of comprehensive learning programs and curriculum design, creating structured pathways for students and professionals to enhance their technical expertise. Established partnerships with industry experts and academic institutions to provide high-quality educational content and mentorship opportunities."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Publications Section

const publicationsSection = {
  title: emoji("Publications 📚"),
  papers: [
    {
      title: "Box it, Track it: A Weakly Supervised Framework for Cell Tracking",
      venue: "DAGM German Conference on Pattern Recognition (DAGM GCPR 2025)",
      year: "2025",
      date: "2025-03-15", // Format: YYYY-MM-DD for sorting
      description: "BoxTrack offers a lightweight and annotation-efficient alternative for cell tracking, requiring only a single bounding box per cell in the first frame. Without relying on point-level annotations, it performs end-to-end instance segmentation and tracking, substantially reducing annotation cost while improving performance over existing methods like SAT by +15.96 MOTA points on CTMC dataset.",
      tags: ["Computer Vision", "Deep Learning","Microscopy", "Biomedical", "Cell Tracking", "Segment Anything Model 2", "Weak Supervision", "Temporal Downsampling"],
      links: [
        { name: "PDF", url: "#", icon: "fas fa-file-pdf" },
        { name: "Code", url: "#", icon: "fab fa-github" }
      ]
    },
    {
      title: "SAT: Segment and Track Anything for Microscopy",
      venue: "International Conference on Agents and Artificial Intelligence (ICAART 2025)",
      year: "2025",
      date: "2025-03-15", // Format: YYYY-MM-DD for sorting
      description: "SAT presents a novel pipeline that leverages point annotations in the first frame to automate cell segmentation and tracking across all subsequent frames. By significantly reducing annotation time and effort, it enables efficient and scalable analysis for large-scale studies, achieving over 80% Multiple Object Tracking Accuracy (MOTA) across diverse datasets and imaging modalities.",
      tags: ["Computer Vision", "Deep Learning", "Microscopy", "Biomedical" , "Cell Tracking", "Segment Anything Model","Weak Supervision"],
      links: [
        { name: "PDF", url: "#", icon: "fas fa-file-pdf" },
        { name: "Code", url: "#", icon: "fab fa-github" }
      ]
    },
    {
      title: "CellGenie: An End-to-End Pipeline for Synthetic Cellular Data Generation and Segmentation",
      venue: "Annual Conference on Medical Image Understanding and Analysis (MIUA 2024)",
      year: "2024",
      date: "2024-03-15", // Format: YYYY-MM-DD for sorting
      description: "CellGenie addresses data scarcity in deep learning-based cell segmentation through an innovative approach for automatic synthetic data generation. Leveraging the LIVECell dataset, it generates synthetic microscopic images with corresponding segmentation masks, seamlessly integrating this data into training to enhance model performance beyond existing annotated datasets and improve robustness and generalization.",
      tags: ["Computer Vision", "Deep Learning","Microscopy", "Biomedical", "Cell Segmentation"],
      links: [
        { name: "PDF", url: "#", icon: "fas fa-file-pdf" },
        { name: "Code", url: "#", icon: "fab fa-github" }
      ]
    },
    {
      title: "DeepMuCS: A Framework for Co-culture Microscopic Image Analysis, From Generation to Segmentation",
      venue: "IEEE-EMBS International Conference on Biomedical and Health Informatics (BHI 2022)",
      year: "2022",
      date: "2022-09-27", // Format: YYYY-MM-DD for sorting
      description: "DeepMuCS presents a framework for co-culture microscopic image data generation and culture-dependent cell segmentation. Addressing the critical need for cell-type discrimination in co-culture environments for drug development, it generates microscopic images containing multiple cell cultures and provides a pipeline for cell-type aware segmentation in co-culture microscopic images, achieving good precision for understanding cellular mechanisms in disease states.",
      tags: ["Computer Vision", "Deep Learning","Microscopy", "Biomedical", "Cell Segmentation", "Co-culture Imaging", "Healthcare"],
      links: [
        { name: "PDF", url: "#", icon: "fas fa-file-pdf" },
        { name: "Code", url: "#", icon: "fab fa-github" }
      ]
    },
    {
      title: "Point2Mask: a weakly supervised approach for cell segmentation using point annotation",
      venue: "Annual Conference on Medical Image Understanding and Analysis (MIUA 2022)",
      year: "2022",
      date: "2022-07-25", // Format: YYYY-MM-DD for sorting
      description: "Point2Mask presents a weakly supervised approach for cell instance segmentation using only point and bounding box annotations, enormously reducing annotation efforts. Evaluated on the LIVECell dataset, it achieved 43.53% mean average precision - comparable to fully supervised methods trained with complete segmentation masks - while being 3.71 times faster to annotate compared to full mask annotation.",
      tags: ["Computer Vision", "Deep Learning","Microscopy", "Biomedical", "Cell Segmentation", "Weak Supervision", "Point Annotation"],
      links: [
        { name: "PDF", url: "#", icon: "fas fa-file-pdf" },
        { name: "Code", url: "#", icon: "fab fa-github" }
      ]
    }
  ],
  sortByDate: true, // Sort papers from latest to oldest
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "Mahdi.koochali@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  publicationsSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

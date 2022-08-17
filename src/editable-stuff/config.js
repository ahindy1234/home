// Navigation Bar SECTION
const navBar = {
  show: true,
}

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ali",
  middleName: "",
  lastName: "Hindy",
  message:
    " Lifelong learner. Passionate about machine learning, finance, NLP, deep learning, and more.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ahindy1234",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ali-hindy-6484a6208/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/AliHindy2",
    },
  ],
}

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "My name is Ali Hindy. I’m a current undergrad at Stanford University pursuing a degree in Mathematics. I'm most passionate about leveraging the tools of computer science, finance, and mathematics to gain insight on the world around us and help valuable companies deliver amazing products, and my goal is to pursue this passion within the intersection of these fields. In my free time I like working on open source projects, investing, or startups, namely Quantum Computing Frameworks (like Tequila) or analyzing companies using DCFs and sensitivity analysis.",
  resume: require("../editable-stuff/Ali_Hindy_Stanford_Resume.pdf"),
}

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ahindy1234", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: [],
}

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Passions & Side Projects",
  message:
    "Check out my recent projects & passions! Please reach out if you have ideas for my Youtube channel, want to join my podcast, or would like graphic design / web development services!",
  images: [
    {
      img: require("../editable-stuff/youtube.png"),
      label: "Youtube Channel",
      paragraph:
        "Check out my youtube channel, The Teaching Assistant. I provide free educational content about personal finance, investing, math, and science.",
    },
    {
      img: require("../editable-stuff/podcast.png"),
      label: "Podcast",
      paragraph:
        "Check out my podcast, Uncomfortable Conversations with College Students. I use my podcast as an outlet for hearing both sides of controversial debates with the goal of providing new perspectives for the listeners.",
    },
    {
      img: require("../editable-stuff/website.png"),
      label: "Website Development",
      paragraph:
        "Contact me if you are interested in logo design and website development! I help businesses develop professional logos and websites in order to attract users and revenue.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
}

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 100 },
    { name: "Natural Language Processing", value: 100 },
    { name: "Data Structures", value: 100 },
    { name: "Deep Learning", value: 100 },
    { name: "JavaScript", value: 100 },
    { name: "React", value: 100 },
    { name: "HTML/CSS", value: 100 },
    { name: "Data Science", value: 100 },
  ],
  softSkills: [
    { name: "Leadership", value: 100 },
    { name: "Collaboration", value: 100 },
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 100 },
    { name: "Problem Solving", value: 100 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 100 },
    { name: "Creativity", value: 100 },
  ],
}

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering, Quantitative Research, or Machine Learning internship / new grad opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ahindy@stanford.edu",
}

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Quantitative Research Summer Analyst @ Ellington Management Group ",
      companylogo: require("../assets/img/ell.png"),
      date: "June 2022 – August 2022",
    },
    {
      role: "Undergraduate Student Researcher @ Stanford Autonomous Systems Lab",
      companylogo: require("../assets/img/asl.png"),
      date: "Nov 2021 – Present",
    },
    {
      role: "Data Science & Software Engineering Intern @ Point Pickup ",
      companylogo: require("../assets/img/point_pickup.png"),
      date: "June 2021 – August 2021",
    },
    {
      role: "Product Manager @ Yakera",
      companylogo: require("../assets/img/yakera.png"),
      date: "June  2021 – Present",
    },
    {
      role: "ASL Researcher Incorporating Natural Language Processing into Sign Language Translation with Harvard Professor Dr. Chris Tanner",
      companylogo: require("../editable-stuff/iacs.png"),
      date: "May 2020 - August 2021",
    },
    {
      role: "Independent ML Projects (Winner of CT State Science Fair)",
      companylogo: require("../editable-stuff/science.png"),
      date: "May 2018 - May 2020",
    },
  ],
}

// Blog SECTION
const blog = {
  show: true,
  heading: "Current Research",
  message: "",
}

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  blog,
}

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#08060B, #09527A, #233F5F, #731E8C, #202340",
  firstName: "Jonathon",
  middleName: "",
  lastName: "Hackbarth",
  message: " Making things that matter ",
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/jonathon-hackbarth",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/jonathon-w-hackbarth/",
    },
    {
      image: "fas fa-envelope",
      url: "mailto:dev@jonathonhackbarth.com",
    },
  ],
};

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
  imageLink: require("../editable-stuff/jonathonhackbarth.png"),
  imageSize: 375,
  message:
    "My name is Jonathon Hackbarth. I specialize in bridging the gap between business and technology, leveraging expertise in Microsoft 365, Power Platform, Azure, and enterprise automation to solve complex problems and drive meaningful change. With a unique blend of technical depth and strong communication skills, I excel at introducing emerging technologies, simplifying their adoption, and empowering teams to succeed. My career highlights include replacing multi-million-dollar contact centers with Power Apps solutions, building enterprise governance at scale (100k+ users), and mentoring low-code communities to modernize legacy processes. I’m passionate about working on impactful projects that make a difference while staying at the forefront of innovation.",
  resume:
    "https://docs.google.com/document/d/1hTGTszeoDOw9UOEPU6FLgeboYaFBNX6atnvne3ZS7zA/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jonathon-hackbarth", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/jonathonhackbarth.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/jonathonhackbarth.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Microsoft 365 Administration", value: 95 },
    { name: "Power Platform", value: 90 },
    { name: "Power Apps", value: 90 },
    { name: "Power Automate", value: 90 },
    { name: "Power BI", value: 90 },
    { name: "Azure", value: 85 },
    { name: "Automation", value: 85 },
    { name: "Entra", value: 85 },
    { name: "PowerShell", value: 80 },
    { name: "SharePoint Administration", value: 85 },
    { name: "Web Design & Full Stack Development", value: 70 },
    { name: "Networking & Hardware Management", value: 65 },
  ],

  softSkills: [
    { name: "Problem Solving", value: 95 },
    { name: "Troubleshooting", value: 95 },
    { name: "Collaboration", value: 90 },
    { name: "Communication", value: 90 },
    { name: "Adaptability to Emerging Technologies", value: 95 },
    { name: "Mentorship & Leadership", value: 85 },
    { name: "Client Relationship Management", value: 90 },
    { name: "Technical Training & Enablement", value: 85 },
    { name: "Business-Technology Alignment", value: 90 },
    { name: "Empathy & Patience with Clients", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I’m currently looking for remote, flexible opportunities in technology consulting, enterprise automation, or emerging tech adoption. If you’re hiring for a role where I can help bridge the gap between business and technology or if you have any questions, feel free to email me at",
  email: "me@jonathonhackbarth.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "M365 Administrator", // Here Add Company Name
      companylogo: "Test",
      date: "June 2018 – Present",
    },
    {
      role: "Various Roles",
      companylogo: "Test",
      date: "August 2007 – June 2018",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: true,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};

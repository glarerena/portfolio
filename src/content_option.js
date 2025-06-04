import drumKitImage from './assets/images/drum_kit.png';
import simonSaysImage from './assets/images/simon_says.png';
import diceGameImage from './assets/images/dice_game.png';
import mondrianPicImage from './assets/images/mondrian.png';
import colorFlipperImage from './assets/images/color_flipper.png';
import romanNumImage from './assets/images/roman_converter.png';
import renaImage from './assets/images/rena.jpg'
const logotext = "RENA";
const meta = {
    title: "Rena Glare",
    description: "I’m Rena Glare, a Full Stack Developer student.",
};

const introdata = {
    title: "I’m Rena Glare",
    animated: {
        first: "I love coding. 🩷 💙 ",
        second: "I love all things tech.",
        third: "Movies, music and animals are my loves too.",
    },
    description: "A full time student, learning to code, and love life together in harmony.",
    your_img_url: renaImage,
};

const dataabout = {
    title: "A little more about me.",
    aboutme: "I am a passionate web developer with a love for cars, coding, music and movies. My diverse interests keep me in touch with the ever evolving world and technology we have today.",
};
const worktimeline = [{
        jobtitle: "Persevere",
        where: "Full Stack Bootcamp",
        date: "2022 - 2023",
    },
    {
        jobtitle: "Columbia University JTC",
        where: "Tech Pathways SU ",
        date: "2024",
    },
    {
        jobtitle: "Columbia Univesity JTC",
        where: "Flagship FU",
        date: "2024 - 2025",
    },
];

const skills = [{
        name: "HTML/CSS",
        value: 90,
    },
    {
        name: "JavaScript",
        value: 85,
    },
    {
        name: "Python",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "MongoDB",
        value: 75,
    },
];

const services = [{
        title: "Front End Development",
        description: "Transforming ideas into visually stunning, user-friendly websites with a keen eye for detail and design.",
    },
    {
        title: "Back End Development",
        description: "Building robust, scalable server-side solutions that power seamless, high-performance web applications.",
    },
    {
        title: "Full Stack Development",
        description: "Crafting complete web solutions from the ground up, integrating both front-end and back-end technologies for a cohesive user experience.",
    },
];

const dataportfolio = [{
        img: simonSaysImage,
        description: "A web-based Simon Says game that challenges players' memory and attention with a series of increasingly complex color and sound sequences.",
        link: "https://glarerena.github.io/simon_says_game/",
    },
    {
        img: drumKitImage,
        description: "An interactive drum kit with responsive sound and dynamic visual feedback using modern web technologies.",
        link: "https://glarerena.github.io/drum_kit/",
    },
    {
        img: diceGameImage,
        description: "A web-based dice game where a human competes against a computer opponent, utilizing HTML, CSS, and JavaScript for interactive gameplay.",
        link: "https://glarerena.github.io/dice_game/",
    },
    {
        img: mondrianPicImage,
        description: "A static Mondrian-inspired project that leverages Flexbox and Grid layouts to create a visually striking design.",
        link: "https://github.com/glarerena/Mondrian-Project",
    },
    {
        img: colorFlipperImage,
        description: "A color flipper web application built with vanilla JavaScript, HTML, and CSS that let users toggle betweeen simple and hexadecimal color codes.",
        link: "https://glarerena.github.io/color_flipper/",
    },
    {
        img: romanNumImage ,
        description: "A web-based Roman numeral converter that translates between Roman and decimal numbers with ease using a straightforward and intuitive interface.",
        link: "https://glarerena.github.io/roman_converter/",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "rena.glare@icloud.com",
    YOUR_FONE: "(434)-710-3100",
    description: "Contact Information for Rena Glare.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_um0civn",
    YOUR_TEMPLATE_ID: "template_u9uwmov",
    YOUR_USER_ID: "wnlxpQ3L2S0zK5c51",
};

const socialprofils = {
    github: "https://github.com/glarerena",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/rena-glare-64983029a/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
import type { ImageMetadata } from "@astrojs/image/dist/vite-plugin-astro-image";
// @ts-ignore
import image from "../assets/social.png";
// @ts-ignore
import pic from "../assets/ascii.png";

export interface Author {
    firstname: string;
    bio: string;
    profilePic: ImageMetadata;
    os?: string;
    shell?: string;
    lastname: string;
    socials: Socials[];
}

export interface Socials {
    name: string;
    link: string;
}

export interface Site {
    lang: string;
    rssTitle: string;
    siteName: string;
    title: string;
    description: string;
    image: ImageMetadata;
    twitterCreator: string;
    author: Author;
}

export const site: Site = {
    lang: "en",
    rssTitle: "Javier IA's blog posts",
    siteName: "Javier Flores",
    title: "Welcome to my personal website.",
    description:
        "This is my personal website, where I post news and some other cool stuff.",
    image: image,
    twitterCreator: "",
    author: {
        os: "ArchLinux",
        profilePic: pic,
        shell: "Zsh",
        bio: "I'm a IA developer who loves retroTech and video games .",
        firstname: "Javier",
        lastname: "Flores",
        socials: [
            {
                name: "github",
                link: "https://github.com/javierIA",
            },
            {
                name: "Linkedin",
                link: "https://www.linkedin.com/in/javier-flores-x2/",
            },

        ],
    },
};

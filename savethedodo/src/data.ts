import { arrlinks, link } from "./typings";



export const Navlinks: link[] = [
    { title: "Discover", url: "/some" },
    { title: "Get Involve", url: "/some" },
    { title: "About Us", url: "/about" },
]

export const Buttomlinksbundle: arrlinks = [
    {
        title: "Discover",
        content: [
            { title: "The Island", url: "/the_island" },
            { title: "Ragnarok", url: "/ragnarok" },
            { title: "More On Our Work", url: "/our_work" },
            { title: "About Save The Dodo", url: "/about" },
        ]
    },
    {
        title: "Act",
        content: [
            { title: "Donate to Save The Dodo", url: "/donate" },
            { title: "Take Action", url: "/take_action" },
            { title: "Partner with Save The Dodo", url: "/partner_with" }
        ]
    },
    {
        title: "Latest",
        content: [
            { title: "Latest Updates", url: "/latest_updates" },
            { title: "Press Centre", url: "/press_centre" },
            { title: "Success Stories", url: "/success_stories" } ]
    },

];



export const Footerlinksbundle: arrlinks = [
    {
        title: "about the fundation",
        content: [
            { title: "FAQ", url: "/contact" },
            { title: "Jobs", url: "/jobs" },
            { title: "Save The Dodo Consultant", url: "/consultant" },
            { title: "Contact On The Island", url: "/contact_ragnarok" },
            { title: "Contact On Ragnarok", url: "/contact_island" },

        ]
    },
    {
        title: "about the site",
        content: [
            { title: "Using & Sharing Site Content", url: "/sharing" },
            { title: "Privacy", url: "/privacy" },
            { title: "Terms & Conditions ", url: "/terms" }
        ]
    },
    {
        title: "site",
        content: [ { title: "Site Map", url: "/site_map" } ]
    },

];


export const FooterText = "SAVE THE DODO IS A FAKE ORG ONLY FOR WEBDEV PORTAFOLIO SHOWCASE";
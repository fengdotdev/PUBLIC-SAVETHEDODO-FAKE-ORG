import { arrlinks, link } from "./typings";



export const Navlinks: link[] = [
    { title: "Discover", url: "/discover" },
    { title: "Get Involve", url: "/act" },
    { title: "About Us", url: "/discover/about" },
]

export const Buttomlinksbundle: arrlinks = [
    {
        title: "Discover",
        content: [
            { title: "The Island", url: "/discover/the_island" },
            { title: "Ragnarok", url: "/discover/ragnarok" },
            { title: "More On Our Work", url: "/discover/our_work" },
            { title: "About Save The Dodo", url: "/discover/about" },
        ]
    },
    {
        title: "Act",
        content: [
            { title: "Donate to Save The Dodo", url: "/act/donate" },
            { title: "Take Action", url: "/act/take_action" },
            { title: "Partner with Save The Dodo", url: "/act/partner_with" }
        ]
    },
    {
        title: "Latest",
        content: [
            { title: "Latest Updates", url: "/latest/latest_updates" },
            { title: "Press Centre", url: "//latest/press_centre" },
            { title: "Success Stories", url: "/latest/success_stories" } ]
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
        content: [ { title: "Site Map", url: "/site/site_map" } ]
    },

];


export const FooterText = "SAVE THE DODO IS A FAKE ORG ONLY FOR WEBDEV PORTAFOLIO SHOWCASE";
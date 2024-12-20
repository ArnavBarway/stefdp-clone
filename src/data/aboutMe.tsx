export const aboutMeText = `import type {
    PersonalInfo,
    KnownLanguage,
    KnownProgrammingLanguage,
    MyApp,
    DiscordSocialInfo,
    InstagramSocialInfo,
    RevoltSocialInfo,
    GitHubSocialInfo,
    RedditSocialInfo,
    TwitterSocialInfo,
    Socials
} from "@/types/aboutMe";

/*
    My personal informations
*/

const personalInfo: PersonalInfo = {
    firstName: "Arnav",
    lastName: "Barway",
    getFullName: function(): string {
        return \`\${this.firstName} \${this.lastName}\`
    },
    age: 11, // Not public
    gender: "Male",
    birthday: new Date([[currentTimestamp]]).toLocaleString('it').split(',')[0].replace('[[currentYear]]', '200#'), // aka 15/03/200#
    nationality: "Italian", // Suca
    status: "[[striketrhoughStart]]Single[[striketrhoughEnd]] [[striketrhoughStart]]Alone... :([[striketrhoughEnd]] Just Want to Die", // how to run "taskkill /f life.exe" for IRL life?

/*
    Spoken Languages
*/

const knownLanguages: Array<KnownLanguage> = [
    {
        name: "Indian",
        level: 100 // 0-100 (kinda obv since it's my native lang)
    },
    {
        name: "English",
        level: 95 // 0-100 (this is how I think I am, idk if others think so too)
    }
];

/*
    Programming Languages, Markup Languages and Terminal
*/

const knownProgramming: Array<KnownProgrammingLanguage> = [
    {
        name: "Javascript", // for the comment on the status value, the question goes also for "fs.unlink('C:\Life.exe')"
        level: 15 // 0-100
    },
    {
        name: "HTML", // for the previous comment, also for "document.getElementById('life').remove()"
        level: 70 // 0-100
    },
    {
        name: "CSS", // also for "#life { display: none; }"
        level: 50 // 0-100
    }
];

const instagram: InstagramSocialInfo = {
    followers: 16 // Last updated December 20 2024, 16:42 (04:42 PM)
};

const gitHub: GitHubSocialInfo = {
    followers: 9, // Last updated March 4 2024, 21:41 (09:41 PM)
    repositories: 29 // Last updated March 4 2024, 20:41 (09:41 PM)
};

const socials: Socials = {
    instagram,
    github,
};

export default {
    knownProgramming,
    knownLanguages,
    personalInfo,
    socials,

};
`;

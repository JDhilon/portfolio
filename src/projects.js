import teslagames from './images/teslagames.jpg';
import todo from './images/todo.png';
import dungeon from './images/dungeon.png';

const projects = [
    {
        title: "ToDo List",
        description: `An online todo list, with secure authentication. 
            Features include the list being stored via MongoDB to allow users to access it from anywhere, with a secure login for authentication.
            Development build includes use of Google OAuth2.0 for authentication.
            The site itself is rendered using EJS and Node.js.`,
        links: {
            github: "https://github.com/JDhilon/todo-list-v2",
            website: "https://boiling-hamlet-45674.herokuapp.com/",
            youtube: ""
        },
        image: todo
    },
    {
        title: "Dungeon Generator",
        description: `This is a work in progress dungeon generation application for making easy and fun maps for use in tabletop roleplaying games, such as Dungeon and Dragons.
                    The site is created using React, and allows a user to enter in parameters for random dungeon generation. 
                    Links between rooms are created using a graph data structure and a pseudorandom algorithm for creating a anything from a linear design to a maze-like structure.
                    Future updates for this project include automatically exporting the finished map to an online TTRPG tool, such as Roll20, and giving users a set of tools to update the generated map.`,
        links: {
            github: "https://github.com/JDhilon/dungeon-gen-app",
            website: "https://jdhilon.github.io/dungeon-gen-app/",
            youtube: ""
        },
        image: dungeon
    },
    {
        title: "Tesla Games",
        description: `Tesla Games is a car racing and battle computer game, developed as part of a team project.
            Players are sent into a race course, where they rely on their skillful driving, and clever ability usage to survive until the end. 
            You can play the game either by yourself against a competitive AI, or team up with friends to play a local splitscreen multiplayer game.
            The game itself is packaged for use on Windows 10, and makes use of libraries such as OpenGL and PhysX. `,
        links: {
            github: "https://github.com/JuandeReiset/Tesla-Games",
            website: "",
            youtube: "https://www.youtube.com/watch?v=ftquclzoR98&feature=youtu.be"
        },
        image: teslagames
    }
];

export default projects;
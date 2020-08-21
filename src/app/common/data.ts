import { Competition } from '../pages/competitions/competition';
import { Project } from '../pages/projects/project';

export const competitions: Competition[]  = [
    {
        title: "Some hackathon",
        description: `What you did at this hackathon`,
        date: "April, 2020"
    },

    {
        title: "Some competition",
        description: `About the competition and your experience`,
        date: "March, 2020"
    },

    {
        title: "Some award",
        description: `About the award and its prestige (you can also add images like this)`,
        date: "March, 2020",
        photoUrl: "https://techcrunch.com/wp-content/uploads/2019/06/GettyImages-944060114.jpg?w=730&crop=1"
    }
]

export const projects: Project[] = [
    {
        id: "ste",
        title: "Secure Text Editor",
        description: "Remake of Molecule outside of a hackathon environment with a different UI and fewer bugs",
        date: "April, 2020",
        cardPhotoUrl: "https://i.ibb.co/ZmkHJGn/main.png",
        sections: [
            {
                title: "Overview",
                text: [
                    "This application is a remake of Molecule outside of a hackathon environment with a different UI and fewer bugs. The idea behind the platform is to provide users with a text-editor or a minimalistic IDE that would enable them to write their code in an encrypted format to provide sourcecode leaks at big companies. Unlike Molecule, I decided to work with a simpler GUI development library with Python for this application called Tkinter since I am more familiar with it. I also managed to remove the bug we had with larger file sizes due to RSA encryption. RSA only supports fairly small text sizes for encryption due to padding, which is something my team did not anticipate while working on Molecule at the hackathon. I figured out that if we encrypted the users' source code using symmetric encryption and encrypted the symmetric key using asymmetric encryption (RSA), the application would finally be able to support larger file sizes. I also added a few other features that would make it appear more like a modern text-editor. You can see what it looks like in the gallery or try it out from GitHub. In terms of other functionality, it is pretty similar to Molecule so feel free to check that out too."
                ]
            }
        ],
        tech: [
            "Python",
            "Tkinter",
            "RSA Encryption",
            "Symmetric Encryption"
        ],
        projectLinks: [
            {
                link: "https://github.com/gurneetbhatia/enc-text-editor",
                text: "GitHub"
            }
        ],
        galleryImages: [
            {
                photoUrl: "https://i.ibb.co/5kk4rb4/org.png",
                text: "The login page that allows you to enter the credentials of an organisation"
            },
            {
                photoUrl: "https://i.ibb.co/BzN2dds/file-menu.png",
                text: "A menu for creating, saving, and loading encrypted or unencrypted files"
            },
            {
                photoUrl: "https://i.ibb.co/FxFg6gs/edit-menu.png",
                text: "A menu for editing the text in the file"
            },
            {
                photoUrl: "https://i.ibb.co/VjYKSSb/file-selector.png",
                text: "File selector"
            },
            {
                photoUrl: "https://i.ibb.co/Xx7fJ1r/loaded.png",
                text: "What an encrypted file looks like when loaded into the editor"
            }
        ]
    },
    {
        id: "molecule",
        title: "Molecule",
        description: "An encrypted IDE/text-editor that keeps your sourcecode encrypted at all times (even during runtime)",
        date: "April, 2020",
        cardPhotoUrl: "https://i.ibb.co/FWBCg0d/main.png",
        sections: [
            {
                title: "Overview",
                text: [
                    "I worked on this project for StudentHack 2020 with my teammates Finlay Hudson and Haikal Khairul. We worked on a text editor that would help big companies avoid having their source code leaked. It does this by storing and accessing only encrypted versions of the files that the user is working on and even only running them. Since we wanted to completely avoid storing a decrypted version of any file, we wrote our own system running different file formats with the compilers on the system. For the purposes of this hackathon, we provided support for Python, Java, C++, and plain-text files."
                ]
            },
            {
                title: "Description",
                text: [
                    "The platform allows users to encrypt a whole project while also working on it simultaneously. We used asymmetric encryption to protect the users' files. The private key for these files is encrypted too with a password that can be shared amongst users of a common organisation to collaborate on a project. We provide supports for Python, Java, Plaintext and C++ files at the moment. The execution of these files happens through our environment so as to avoid the user gaining access to a decrypted version of the file at any time of this process outside our text editor.",
                    "We used the Kivy library to produce the user interface and the cryptography library in python to encrypt files using RSA encryption."
                ]
            }
        ],
        tech: [
            "Python",
            "Kivy",
            "RSA Encryption"
        ],
        projectLinks: [
            {
                link: "https://github.com/gurneetbhatia/Secure-Text-Editor",
                text: "GitHub"
            },
            {
                link: "https://devpost.com/software/molecule-z7scbm",
                text: "Devpost"
            },
            {
                link: "https://www.youtube.com/watch?v=aW8-VKFJXvY&feature=youtu.be",
                text: "YouTube"
            }
        ],
        galleryImages: [
            {
                photoUrl: "https://i.ibb.co/S3CwWds/create-orgs.png",
                text: "The login page allows you to enter credentials of an organisation"
            },
            {
                photoUrl: "https://i.ibb.co/NZxjrFj/orgs.png",
                text: "A list of the currently logged-in organisations on your system"
            },
            {
                photoUrl: "https://i.ibb.co/TRSrmqZ/menu.png",
                text: "A menu for creating, saving and loading encrypted or unencrypted files"
            },
            {
                photoUrl: "https://i.ibb.co/yP89g9d/save.png",
                text: "Custom file selector"
            },
            {
                photoUrl: "https://i.ibb.co/NFgDdj7/text.png",
                text: "What an encrypted file looks like when loaded onto the system"
            },
            {
                photoUrl: "https://i.ibb.co/FWBCg0d/main.png",
                text: "When the encrypted file is run through our application (we support the development of GUI apps too)."
            }
        ]
    }
]
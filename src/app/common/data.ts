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
    },
    {
        id: "video-ml",
        title: "Video-ML",
        description: "A machine learning model that uses a generative adversarial network to unblur images and live video feeds. If integrated with WebRTC it could maintain video quality over video calls with poor connectivity issues",
        date: "April, 2020",
        cardPhotoUrl: "https://i.ibb.co/jrVf96r/tf.png",
        titlePhotoUrl: "https://i.ibb.co/kysk7X5/screenshot.png",
        sections: [
            {
                title: "Overview",
                text: [
                    "Out of pure curiosity to see if my idea was feasible at all or not, I produced a machine learning model that used a Generative Adversarial Network to unblur an image. It was trained using a deep CNN model of unblurred original images and a blurred version produced through Gaussian Blurring (OpenCV). During the training, I also learned to use Generators and Discriminators. I used online resources and help extensively while working on this project to try and understand the maths behind all of this and optimise my code for live video feeds.",
                    "As you can see it does a good job of unblurring an image. The image is blurred quite uniformly through Gaussian blurring. As a sub-part of this model, I also had to write a classifier of sorts that would try to predict whether a given pixel is considered to be blurred in the first place or not (it depends on the pixels around it and how they appear to be in a group). Since I have been testing my model on just uniformly blurred images and video feeds, I believe that it might not give as good of an effect in a real-life scenario where the level of blurring may differ. This is something that I will have to consider now.",
                    "When working with machine learning of any sort, for some reason I tend to stick with Stochastic Gradient Descent as the optimiser of choice because I understand the calculus behind it fairly well. While I was using this optimiser, the Discriminator was only able to work with a roughly 75% accuracy. I researched a bit online and decided to try another optimiser called Adam. The accuracy jumped straight to 92%. I decided to try a different dataset just in case, and it was still much higher than SGT. Therefore, despite not understanding why this really happened, I have chosen to stick with this optimiser.",
                    "I learned a lot through working on this project, and over the next few months, I am going to try to optimise it for video feeds and reduce the latency. Once I have done that, I will be trying to integrate it into a WebRTC platform of some sort so that the model can be utilised at the end-points of video calls to improve picture quality for the users. I am also looking into the option of writing a generic compression and decompression algorithm based on this idea which could work with various different data formats too."
                ]
            }
        ],
        tech: [
            "Python",
            "TensorFlow",
            "Keras",
            "Machine Learning",
            "Deep Learning",
            "OpenCV",
            "GAN",
            "CNN",
            "Markov Chain"
        ],
        projectLinks: []
    },
    {
        id: "mug-maps",
        title: "Mug Maps",
        description: "An Android app that uses crime stats data and machine learning to find the safest route you can take.",
        date: "November, 2018",
        cardPhotoUrl: "https://i.ibb.co/1njtGDS/android.png",
        sections: [
            {
                title: "Overview",
                text: ["I made this project in collaboration with my friend Jyram Sharma from Brunel University London. We made it over a weekend at jacobsHack! 2018 in Bremen, Germany within 24 hours. The project won the 'Most Disruptive' app award at the hackathon."]
            },
            {
                title: "Description",
                text: [
                    "The project is an Android mobile application that uses the Crime Statistics data (provided in an anonymized format by the UK Police) to find the safest route our user can take when travelling from one place to another. We made this keeping in mind the amount of knife-crime in London especially, but also around the UK in general.",
                    "The project is built primarily using Android Studio with backend and API support from the Google Cloud Platform. We used the Maps API for displaying graphics to the user and the Directions API for finding multiple routes between two points. We also used the API I mentioned provided by the UK police force (government data) called 'crime-street' which returned to us the details regarding crimes that occurred around a position we provided to it within a certain timeframe. The primary purpose of the application is to find the safest path between two places such that the likeliness of crime occurring on the path (based on the crime stats data) would be the least. Due to the limitations of the databases available to us, our application would only work in London at the moment. Therefore, for the purposes of testing, we have set the original location as Buckingham Palace (since this it was developed while we were in Germany). The application starts by displaying a blank map to the user with a search bar at the top. They can search for the place that they want to using this bar, and we would get the possible paths between their current location and the location provided using the Directions API. The API suggests multiple paths to us, and we find the safest one by passing each of the waypoints of each path through the UK Police API to develop a crime rating for the path. The path with the least crime rating is the one that we then output to the user. During the hackathon, one of the primary limitations we faced was that within the given timeframe we were unable to make our algorithm robust and efficient. At the moment, it gives the route that it is fairly certain is the safest for the user to use and due to the large volume of data returned by the UK (100s, even 1000s in some cases, of crimes reported along each suggested route), parsing it takes a considerable amount of time. Through our testing we found that it can take anywhere between 2 and 7 minutes depending on the neighbourhoods the routes pass through, their length, etc. To calculate the crime rating of a path, we retrieved data from the 'crime-street' API for each of the waypoints on each of the suggested paths (which we had from the Directions API). The API returned a lot of data to us that included the category of the crime (like burglary, public disorder, drugs, etc.) along with the date and exact coordinates of the occurrence. We then rated each of the offences out of 10 so that we could perceive just how serious each offence was how much it should affect the overall crime rating of the path. We then added the individual crime ratings for each of the offences that happened around the waypoints to compute the overall crime rating. We also had to write code to avoid the same offence being counted twice since it could have been in the vicinity of multiple points along the same path. After having done this for each of the suggested paths, we returned the path with the lowest crime rating to the map for it to be displayed to the user.",
                    "If we had more time to work on this project, we would certainly work on the efficiency aspect of it by maybe compressing the data or just not parsing data that is not necessarily relevant to us anymore. We would also set up a user-based ranking system that would allow users who have used a certain route to rate how safe they felt. While we care about what our users think, we feel that the data provided by the UK Police crime stats would be reliable and therefore a weighting of 75% would be given to the statistical data and 25% to the user feedback."
                ]
            }
        ],
        tech: [
            "Java",
            "Android Studio",
            "Kotlin",
            "HTTP Requests",
            "Google Maps API",
            "UK Police Data API",
            "JSON"
        ],
        projectLinks: [
            {
                link: "https://github.com/gurneetbhatia/SaferRoute",
                text: "GitHub"
            },
            {
                link: "https://devpost.com/software/saferroute",
                text: "Devpost"
            }
        ]
    }
]
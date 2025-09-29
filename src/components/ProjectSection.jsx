const projects = [
    {
        id:1,
        title: "VintageArena",
        description: "Webstite page using HTML, CSS, JS",
        image: "/public/projects/VintageArena.png",
        tags: ["HTML", "CSS", "Java"],
    },

    {
        id:2,
        title: "JeniusAcademy",
        description: "Webstite page using HTML, CSS, JS",
        image: "/public/projects/Jenius_Academy.png",
        tags: [" HTML ", " CSS ", " Java "],
    },

    {
        id:3,
        title: "ICCSCI - 2025",
        description: "Presented research on 'Optimizing Asynchronous Performance in Node.js with Express and PostgreSQL' at the 10th International Conference on Computer Science and Computational Intelligence (ICCSCI 2025).",
        image: "/public/projects/ICCSCI.png",
        tags: ["Papers", "PosgreSQL", "Node.Js"],

    },

    {
        id:4,
        title: "HackerRank - 2025",
        description: "SQL (Basic) Certified by HackerRank. Earned on September 20, 2025.",
        image: "/public/projects/HackerRankSQLBeginner.png",
        tags: ["SQL"],

    }
];



export const ProjectSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
            Projects & <span className="text-primary"> Achivements </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent Projects and Achivements. Each one was Build when I was doing projects for my class and The Achivements is for self improvements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Buat ganti cols */}
                {projects.flatMap((project, key) => (
                    <div 
                    key={key} 
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        {/* Image */}
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                         {/* Tags */}
                        <div className="p-6">
                            <div className="gap-6 mb-4">
                                {project.tags.map((tag) =>(
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                         {/* Description */}  
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-10">{project.description}</p>
                    </div>
                ))}

            </div>
        </div>
    </section>
    );
};
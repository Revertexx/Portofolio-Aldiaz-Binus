import { Briefcase, Code, User } from "lucide-react";


export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="flex justify-center">
                    <div className="space-y-6 text-center max-w-3xl">
                        <h3 className="text-2xl font-semibold">My Journey into the World of Data</h3>

                        <p className="text-muted-foreground">
                        As a 5th-semester Computer Science student at Binus University, I've discovered my passion lies in the intricate world of databases and analytics. 
                        I'm fascinated by how structured data can be transformed into powerful insights and robust solutions. My goal is to build a career as a Database and Analytics Engineer, 
                        where I can apply my skills to solve complex challenges and drive data-informed decisions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch</a>
                            <a href="https://drive.google.com/file/d/1gOhPaMHB3JhY-LU8Wdbh25kQVFtfFnRk/preview" 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Preview CV</a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
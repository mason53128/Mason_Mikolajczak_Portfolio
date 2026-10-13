import { Calendar1, Code2, Lightbulb, Users } from "lucide-react";

const highlights =[ 
    {
        icon: Code2,
        title: "Passionate About Code and Data",
        description: "I've been interested about creating with code and telling stories with code and data since I was a kid."
    },
    {
        icon: Lightbulb,
        title: "Strong Drive to Learn",
        description: "I always seek projects, videos, and articles that will help me understand technologies I am not familiar with."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "I thrive working with teams to bring all ideas to the table and creating the best solution."
    },
    {
        icon: Calendar1,
        title: "Organization",
        description: "I love to stay organized by leaving myself notes for later and making use of calandar and planner apps."
    }
]



export const About = () => {
    return (
    <section id = "about" className = "py-32 relative overflow-hidden">
        <div  className = "container mx-auto px-6 relative z=10">
            <div className = "grid lg:grid-cols-2 gap-16 items center">
                {/* Left Column */}
                <div className = "space-y-8">
                    <div className = "animate-fade-in">
                    <span className = "text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        About Me
                    </span>
                </div>

                <h2 className = "text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
                    Taking a step in the right direction,
                    <span className = "font-serif italic font-normal text-white"> with data driven decisions.</span>
                </h2>

                <div className = "space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
                    <p>
                        Hello! My name is Mason Mikolajczak and as of May 2027, I will have graduated from the University of Wisconsin-Madison 
                        with a BS in Data Science and a minor in Computer Science. I have always had a curiosity of how code and data can be used 
                        to create and tell stories. 
                    </p>
                    <p>
                        From 6th grade all the way until junior year of college, I have tailored my skills towards computer science. I have skills with languages
                        such as Java, C#, and C. These skills among others I think would prepare me for a software engineering role. However, after my first semester
                        in my junior year, I decided to pursue data science, as I enjoyed being able to take numbers and tell a story with them. In addition, I felt like
                        it stimulated the problem-solving part of my brain more than what I was doing with my Computer Science major. So with that, I have skills in R, Python, and SQL 
                        among others that I think would prepare me for any data analyst/science role.
                    </p>
                    <p>
                        When I am not coding, you can catch me watching the newest episode of Survivor, as it is my dream to get on the show. I enjoy being active and maintaining a 
                        healthy relationship with the outdoors, as I foresee myself being in front of a computer for a large portion of my life. Allowing myself to be active makes me ready to be
                        in front of a computer. 
                    </p>
                </div>

                <div className = "glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
                    <p className = "text-lg font-medium italic text-foreground">
                        "I aim to become the type of person who can create useful progams and use data to create informed decisions
                        that lead to the success of a team."
                    </p>
                </div>
            </div>

            {/*Right Column - Highlights*/}
            <div className = "grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                    <div 
                    key={idx} 
                    className = "glass p-6 rounded-2xl animate-fade-in"
                    style = {{animationDelay: `${(idx + 1) * 100}ms`}}
                    >
                        <div className = "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                            <item.icon className = "w-6 h-6 text-primary"/>
                        </div>
                        <h3 className = "text-lg font-semibold mb-2">{item.title}</h3>
                        <p className = "text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    
                ))}
            </div>
        </div>
        </div>
    </section>
    );
};

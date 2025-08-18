import { useState } from "react"
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    {name: "HTML", level: 95, category: "frontend"},
    {name: "JavaScript", level: 85, category: "frontend"},
    {name: "Python", level: 80, category: "frontend"},
    {name: "Java", level: 70, category: "frontend"},
    {name: "C", level: 70, category: "frontend"},
    {name: "Dart", level: 75, category: "frontend"},
    {name: "PHP", level: 80, category: "frontend"},
    {name: "C#", level: 75, category: "frontend"},
    {name: "R", level: 65, category: "frontend"},
    
    // Backend
    {name: "MySQL", level: 75, category: "backend"},
    {name: "SQLite", level: 70, category: "backend"},
    {name: "Node.js", level: 85, category: "backend"},
    
    // Framework
    {name: "Flutter", level: 80, category: "framework"},
    {name: "Bootstrap", level: 85, category: "framework"},
    {name: "CSS", level: 90, category: "framework"},
    {name: "JSON", level: 80, category: "framework"},
    {name: "ASP.NET", level: 75, category: "framework"},
    {name: "ASP.NET Core", level: 75, category: "framework"},
    {name: "React", level: 90, category: "framework"},
    {name: "Tailwind CSS", level: 80, category: "framework"},
    
    // Tools
    {name: "Adobe Photoshop", level: 75, category: "tools"},
    {name: "Adobe Illustrator", level: 70, category: "tools"},
    {name: "Draw.io", level: 80, category: "tools"},
    {name: "Packet Tracer", level: 70, category: "tools"},
    {name: "Figma", level: 85, category: "tools"},
    {name: "Visual Studio Code", level: 90, category: "tools"},
    {name: "Visual Studio", level: 80, category: "tools"},
    {name: "GitHub", level: 90, category: "tools"},
    {name: "Git", level: 85, category: "tools"},
    {name: "NetBeans", level: 75, category: "tools"},
    {name: "RStudio", level: 65, category: "tools"},
    {name: "Jupyter Notebook", level: 70, category: "tools"},
    {name: "Dev-C++", level: 70, category: "tools"},
    {name: "Canva", level: 80, category: "tools"},
    {name: "Microsoft Office", level: 85, category: "tools"}
]

const categories = ["all", "frontend", "backend", "framework", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter(
        (skill)=> activeCategory === "all" || skill.category === activeCategory
    )

    return(
        <section 
            id="skills" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" 
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card rounded-lg shadow-xs p-6 card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level + "%" }}
                            />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

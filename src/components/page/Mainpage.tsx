'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from '@/components/page/Animatedbackground'

export function Mainpage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <>
            <AnimatedBackground />
            <div className="min-h-screen flex flex-col justify-center items-center p-4 relative py-12">
                <main className={`bg-white/80 backdrop-blur-md shadow-xl rounded-lg max-w-3xl w-full p-8 space-y-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <header className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className="w-32 h-32 relative overflow-hidden rounded-full ring-4 ring-white shadow-lg">
                            <Image
                                src="/Profile.jpg"
                                alt="Sam Jakshtis"
                                width={128}
                                height={128}
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold text-gray-900">Sam Jakshtis</h1>
                            <p className="text-gray-700 font-medium text-lg mt-1">Financial Data Engineer</p>
                            <p className="text-gray-500 text-sm mt-1">Python | SQL | dbt | Airflow | Proptech</p>
                        </div>
                    </header>

                    <section className="text-center md:text-left">
                        <p className="text-gray-800 leading-relaxed">
                            I am a Financial Data Engineer with a strong background in automating financial workflows, building robust data pipelines, and bridging the gap between technical data solutions and business needs.
                            Currently, I specialize in the Proptech sector, leveraging tools like dbt, Airflow, and BigQuery to transform complex real estate data into actionable financial insights.
                            My passion lies in creating efficient, scalable systems that drive decision-making.
                            Outside of code, I am also a part-time farmer, raising cattle, pigs, and chickens on my family farm.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Experience</h2>
                        <div className="space-y-8">

                            <div className="relative pl-8 border-l-2 border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Financial Data Engineer</h3>
                                    <p className="text-blue-600 font-medium">Darwin Homes</p>
                                    <p className="text-sm text-gray-500 mb-2">August 2023 - January 2025 | Remote</p>
                                    <ul className="list-disc list-outside text-gray-700 text-sm space-y-1 ml-4">
                                        <li>Built and maintained automated financial reporting pipelines using Python, SQL, and dbt, reducing monthly closing time by 40%.</li>
                                        <li>Designed and deployed Airflow DAGs to orchestrate ETL processes for large-scale property management data.</li>
                                        <li>Collaborated with finance teams to translate complex accounting requirements into scalable data models in BigQuery.</li>
                                        <li>Led data migration initiatives, ensuring data integrity and consistency across legacy and new systems.</li>
                                        <li>Optimized SQL queries and data warehouse architecture to improve dashboard performance and reduce costs.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-2 border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Project Manager and Consultant</h3>
                                    <p className="text-blue-600 font-medium">LandVest</p>
                                    <p className="text-sm text-gray-500 mb-2">August 2022 - PRESENT | Boston, MA</p>
                                    <ul className="list-disc list-outside text-gray-700 text-sm space-y-1 ml-4">
                                        <li>Managed real estate consulting projects, delivering data-driven valuations and market analysis for high-net-worth clients.</li>
                                        <li>Conducted comprehensive market research and financial modeling to support strategic investment decisions.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-2 border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Backend and Machine Learning Engineer</h3>
                                    <p className="text-blue-600 font-medium">Doorkee</p>
                                    <p className="text-sm text-gray-500 mb-2">June 2020 - August 2021 | New York City, NY</p>
                                    <ul className="list-disc list-outside text-gray-700 text-sm space-y-1 ml-4">
                                        <li>Developed and maintained backend systems for Doorkee, a real estate management platform, using Python and Django.</li>
                                        <li>Developed and maintained machine learning models for Doorkee, a real estate management platform, using Python and scikit-learn.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-2 border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Real Estate Salesperson</h3>
                                    <p className="text-blue-600 font-medium">Coldwell Banker</p>
                                    <p className="text-sm text-gray-500 mb-2">March 2017 - February 2021 | MN and MA</p>
                                    <ul className="list-disc list-outside text-gray-700 text-sm space-y-1 ml-4">
                                        <li>Facilitated residential real estate transactions, leveraging market data to guide clients through buying and selling processes.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Languages & Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'SQL', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML/CSS'].map((skill) => (
                                        <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Data & Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['dbt', 'Airflow', 'BigQuery', 'Tableau', 'GCP', 'Excel', 'Git', 'Financial Modeling'].map((skill) => (
                                        <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Education</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="group bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-start space-x-4 border border-transparent hover:border-gray-200 transition-all">
                                <div className="w-12 h-12 relative overflow-hidden rounded flex-shrink-0 mt-1">
                                    <Image
                                        src="/MIT.png"
                                        alt="MIT Logo"
                                        fill
                                        className="object-contain"
                                        sizes="48px"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Massachusetts Institute of Technology</h3>
                                    <p className="text-blue-600 font-medium text-sm">MS in Real Estate Development (MSRED)</p>
                                    <p className="text-sm text-gray-500">Graduated: 2025</p>
                                    <p className="text-sm text-gray-600 mt-1">Focus on Real Estate Economics, Finance, and Data Analytics.</p>
                                </div>
                            </div>
                            <div className="group bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-start space-x-4 border border-transparent hover:border-gray-200 transition-all">
                                <div className="w-12 h-12 relative overflow-hidden rounded flex-shrink-0 mt-1">
                                    <Image
                                        src="/MAC.jpg"
                                        alt="Macalester Logo"
                                        fill
                                        className="object-contain"
                                        sizes="48px"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Macalester College</h3>
                                    <p className="text-blue-600 font-medium text-sm">BA in Economics and Data Science</p>
                                    <p className="text-sm text-gray-500">Graduated: 2020</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Featured Projects moved to bottom or removed if less relevant to new focus, leaving Chestnut Farms as it's personal */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Personal Projects</h2>
                        <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-center transition-transform hover:scale-[1.01]">
                            <div className="w-16 h-16 relative overflow-hidden rounded-full flex-shrink-0">
                                <Image
                                    src="/chestnut.png"
                                    alt="Chestnut Farms"
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                />
                            </div>
                            <div className="ml-4">
                                <a href="https://www.chestnutfarm.org" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-900 hover:text-blue-600">Chestnut Farms</a>
                                <p className="text-sm text-gray-600 mt-1">
                                    A multi-species farm raising cattle, pigs, and chickens with a CSA model. I manage the data and operations when not coding.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="flex justify-center space-x-4 pt-4 border-t">
                        {[
                            { href: "mailto:sam.jakshtis@gmail.com", icon: Mail, label: "Email", category: "contact" },
                            { href: "https://github.com/samjakshtis", icon: Github, label: "GitHub", category: "social" },
                            { href: "https://www.linkedin.com/in/samuel-jakshtis-271b12196/", icon: Linkedin, label: "LinkedIn", category: "social" },
                            { href: "/Financial Data Engineer - Sam Jakshtis Resume.pdf", icon: FileText, label: "Resume", category: "document" },
                        ].map(({ href, icon: Icon, label }) => (
                            <div key={label} className="relative group">
                                <Button variant="outline" size="icon" className="bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 transition-all hover:shadow-md h-12 w-12" asChild>
                                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                        <Icon className="h-5 w-5" />
                                    </a>
                                </Button>
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </section>
                </main>
            </div>
        </>
    )
}


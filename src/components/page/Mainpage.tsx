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
                            <p className="text-gray-700 font-medium text-lg mt-1">Analytics Engineer</p>
                            <p className="text-gray-500 text-sm mt-1">Python | DBT | SQL | Analytics Engineering | Proptech</p>
                        </div>
                    </header>

                    <section className="text-center md:text-left">
                        <p className="text-gray-800 leading-relaxed">
                            I am an Analytics Engineer specializing in the architecture of high-stakes financial and real estate data systems. Expert in leveraging the modern data stack (DBT, Python, SQL) to transform raw, unstructured data into institutional-grade assets.
                            Proven track record of partnering with C-suite leadership and cross-functional teams to drive data-driven insights for funds and large-scale asset portfolios.
                            Outside of code, I am also a part-time farmer, raising cattle, pigs, and chickens on my family farm.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Experience</h2>
                        <div className="space-y-8">


                            <div className="relative pl-8 border-l-2 border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Analytics Engineer</h3>
                                    <p className="text-blue-600 font-medium">Arrived</p>
                                    <p className="text-sm text-gray-500 mb-2">Jan 2026 - Present | Remote</p>
                                    <ul className="list-disc list-outside text-gray-700 text-sm space-y-1 ml-4">
                                        <li>Reporting directly to the CTO to lead the evolution of the data modeling layer, ensuring data integrity for fractional real estate investment products.</li>
                                        <li>Architecting scalable data schemas to support rapid growth and preparing for a transition into a management role overseeing the data function.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-2 border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">M.B.A. Candidate</h3>
                                    <p className="text-blue-600 font-medium">Massachusetts Institute of Technology</p>
                                    <p className="text-sm text-gray-500 mb-2">Sept 2024 - Dec 2025 | Cambridge, MA</p>
                                    <ul className="list-disc list-outside text-gray-700 text-sm space-y-1 ml-4">
                                        <li>M.B.A. with a focus in real estate and data systems.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-2 border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Financial Data Engineer</h3>
                                    <p className="text-blue-600 font-medium">Darwin Homes</p>
                                    <p className="text-sm text-gray-500 mb-2">Sept 2023 - Jan 2024 | Remote</p>
                                    <ul className="list-disc list-outside text-gray-700 text-sm space-y-1 ml-4">
                                        <li>Designed and supported Finance and Accounting reporting using SQL and Python, improving reporting accuracy and reducing month-end closing time for stakeholders.</li>
                                        <li>Orchestrated scalable ETL workflows using Fivetran and Airbyte, resulting in 99.9% data uptime across distributed data stores.</li>
                                        <li>Partnered with Finance/FP&A for the parent hedge fund to translate needs into DBT jobs, enabling real-time quantitative analysis for critical portfolio decision-making.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-2 border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Data Manager</h3>
                                    <p className="text-blue-600 font-medium">LandVest</p>
                                    <p className="text-sm text-gray-500 mb-2">August 2021 - August 2023 | Boston, MA</p>
                                    <ul className="list-disc list-outside text-gray-700 text-sm space-y-1 ml-4">
                                        <li>Architected data workflows for $10MM+ asset portfolios, transforming unstructured property data into standardized datasets used for institutional fund reporting.</li>
                                        <li>Automated quarterly reporting pipelines using Python and SQL, which eliminated manual aggregation and accelerated the delivery of market intelligence publications.</li>
                                        <li>Developed financial models to simulate asset performance, providing actionable insights that directly influenced strategic acquisition and divestment decisions.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-2 border-gray-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Backend Engineer</h3>
                                    <p className="text-blue-600 font-medium">Doorkee</p>
                                    <p className="text-sm text-gray-500 mb-2">June 2020 - August 2021 | New York City, NY</p>
                                    <ul className="list-disc list-outside text-gray-700 text-sm space-y-1 ml-4">
                                        <li>Engineered optimized pricing models for 1,000+ unit property management firms, directly increasing rental income yields and reducing vacancy rates through data-driven price elasticity.</li>
                                        <li>Analyzed NYC apartment trends using Machine Learning, improving the accuracy of market movement forecasts for internal team members.</li>
                                        <li>Streamlined internal workflows through data analytics to improve company-wide data accessibility.</li>
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
                                    {['DBT', 'Airbyte', 'Fivetran', 'BigQuery', 'Snowflake', 'Tableau', 'Looker', 'Sigma', 'GitHub'].map((skill) => (
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
                                    <p className="text-blue-600 font-medium text-sm">M.B.A.</p>
                                    <p className="text-sm text-gray-500">Sept 2024 - Dec 2025</p>
                                    <p className="text-sm text-gray-600 mt-1">Focus in real estate and data systems.</p>
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
                            { href: "https://www.linkedin.com/in/sam-jakshtis-271b12196/", icon: Linkedin, label: "LinkedIn", category: "social" },
                            { href: "/Sam Jakshtis Resume.pdf", icon: FileText, label: "Resume", category: "document" },
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


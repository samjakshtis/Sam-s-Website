'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from '@/components/page/Animatedbackground'
import { useUmami } from 'next-umami'

export function Mainpage() {
    const [isVisible, setIsVisible] = useState(false)
    const umami = useUmami()

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <>
            <AnimatedBackground />
            <div className="min-h-screen flex flex-col justify-center items-center p-4 relative">
                <main className={`bg-white/80 backdrop-blur-md shadow-xl rounded-lg max-w-2xl w-full p-8 space-y-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <header className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className="w-32 h-32 relative overflow-hidden rounded-full ring-4 ring-white">
                            <Image
                                src="/Profile.jpg"
                                alt="Your Name"
                                width={128}
                                height={128}
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold">Sam Jakshtis</h1>
                            <p className="text-gray-600 mt-2">Data Scientist, Real Estate Investor, and Rancher</p>
                        </div>
                    </header>

                    <section className="text-center md:text-left">
                        <p className="text-gray-900">
                            Hello! I&apos;m a dedicated Data Scientist and Real Estate Investor with a passion for uncovering insights and building lasting value.
                            I specialize in leveraging data-driven strategies to solve complex problems and make informed investment decisions in the real estate market.
                            With expertise in analytics, machine learning, and property investment, I combine precision and vision to turn ideas into impactful results.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'SQL', 'Python', 'R', 'Machine Learning', 'Data Visualization', 'Data Engineering'].map((skill) => (
                                <span key={skill} className="bg-white/50 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm transition-transform hover:scale-105 hover:shadow-lg cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Education</h2>
                            <span className="text-sm text-gray-500">Scroll to see more</span>
                        </div>
                        <div className="space-y-4 overflow-y-auto max-h-28 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-center space-x-4 transition-transform hover:scale-102">
                                <div className="w-16 h-16 relative overflow-hidden rounded-full flex-shrink-0">
                                    <Image
                                        src="/MIT.png"
                                        alt="University Logo"
                                        fill
                                        className="object-cover"
                                        sizes="64px"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium">Massachusetts Institute of Technology</h3>
                                    <p className="text-sm text-gray-600">MSRED Program</p>
                                    <p className="text-sm text-gray-600">Graduated: 2025</p>
                                </div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-center space-x-4 transition-transform hover:scale-102">
                                <div className="w-16 h-16 relative overflow-hidden rounded-full flex-shrink-0">
                                    <Image
                                        src="/MAC.jpg"
                                        alt="University Logo"
                                        fill
                                        className="object-cover"
                                        sizes="64px"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium">Macalester College</h3>
                                    <p className="text-sm text-gray-600">Degree in Economics and Data Science</p>
                                    <p className="text-sm text-gray-600">Graduated: 2020</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Featured Projects</h2>
                            <span className="text-sm text-gray-500">Scroll to see more</span>
                        </div>
                        <div className="space-y-4 overflow-y-auto max-h-28 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-center transition-transform hover:scale-102">
                                <div className="w-16 h-16 relative overflow-hidden rounded-full flex-shrink-0">
                                    <Image
                                        src="/Realti.png"
                                        alt="Project 1 Image"
                                        width={50}
                                        height={50}
                                        className="object-cover"
                                        style={{ display: 'block', margin: 'auto' }}
                                    />
                                </div>
                                <div className="ml-4">
                                    <a href="https://www.realti.org" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline hover:text-blue-500">Realti</a>
                                    <p className="text-sm text-gray-600 mt-1">
                                        A modern MLS system for all users in the real estate industry to work together. Realti is the modern MLS system reimagined for everyone.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-center transition-transform hover:scale-102">
                                <div className="w-16 h-16 relative overflow-hidden rounded-lg flex-shrink-0">
                                    <Image
                                        src="/FocusCubed.png"
                                        alt="Project 2 Image"
                                        width={50}
                                        height={50}
                                        className="object-cover"
                                        style={{ display: 'block', margin: 'auto' }}
                                    />
                                </div>
                                <div className="ml-4">
                                    <a href="https://focuscubed.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline hover:text-blue-500">FocusCubed</a>
                                    <p className="text-sm text-gray-600 mt-1">
                                        A Saas to rent out individual work spaces in coffee shops.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-center transition-transform hover:scale-102">
                                <div className="w-16 h-16 relative overflow-hidden rounded-full flex-shrink-0">
                                    <Image
                                        src="/twincities.jpg"
                                        alt="Project 1 Image"
                                        layout="fill"
                                        className="absolute"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-medium">Hedonic Regression of Twin Cities Real Estate</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        A hedonic regression model to predict the price of a house in the Twin Cities area focusing on the impact of the individual home&apos;s age and its subsequent value.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-center transition-transform hover:scale-102">
                                <div className="w-16 h-16 relative overflow-hidden rounded-full flex-shrink-0">
                                    <Image
                                        src="/lakemead.jpg"
                                        alt="Project 1 Image"
                                        layout="fill"
                                        className="absolute"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-medium">Lake Mead Water Level Prediction</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        A time series forecasting model to predict the water level of Lake Mead in the future for crop farmers and water rights holders to understand the relationship of water futures value and the tangible asset.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg flex items-center transition-transform hover:scale-102">
                                <div className="w-16 h-16 relative overflow-hidden rounded-full flex-shrink-0">
                                    <Image
                                        src="/chestnut.png"
                                        alt="Project 1 Image"
                                        layout="fill"
                                        className="absolute"
                                    />
                                </div>
                                <div className="ml-4">
                                    <a href="https://www.chestnutfarm.org" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline hover:text-blue-500">Chestnut Farms</a>
                                    <p className="text-sm text-gray-600 mt-1">
                                        My family farm takes some of my time. It is a multi-species farm that raises cattle, pigs, and chickens and sells shares via a CSA model. Check it out: Chestnut Farms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="flex justify-center space-x-4">
                        {[
                            { href: "mailto:sam.jakshtis@gmail.com", icon: Mail, label: "Email", category: "contact" },
                            { href: "https://github.com/samjakshtis", icon: Github, label: "GitHub", category: "social" },
                            { href: "https://www.linkedin.com/in/samuel-jakshtis-271b12196/", icon: Linkedin, label: "LinkedIn", category: "social" },
                            { href: "/resume.pdf", icon: FileText, label: "Resume", category: "document" },
                        ].map(({ href, icon: Icon, label, category }) => (
                            <div key={label} className="relative group">
                                <Button variant="outline" size="icon" className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors hover:shadow-lg" data-umami-event={label}>
                                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                </Button>
                                <div className="absolute bottom-full mb-2 bg-gray-100 backdrop-blur-sm p-2 rounded text-sm text-gray-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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


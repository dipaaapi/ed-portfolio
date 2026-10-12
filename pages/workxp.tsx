import Seo from '../components/Seo'
import Image from 'next/image';
import Footer from '../components/footer';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Button, Card, Chip, Heading, IconButton, SectionHeading, Text, cn } from '../components/ui';

type Experience = {
    company: string;
    position: string;
    start: string;
    end: string;
    logo: string;
    current?: boolean;
    skills: string[];
    responsibilities: string[];
};

const experiences: Experience[] = [
    {
        company: 'Provincial Government of Camarines Sur',
        position: 'Computer Instructor / Game Developer / Web Developer',
        start: 'Sep 2022',
        end: 'Present',
        logo: '/camarines_sur.png',
        current: true,
        skills: ['Instruction', 'Game Dev', 'Web Dev'],
        responsibilities: [
            'Spearheaded the development of targeted web and local game applications, increasing user and student engagement.',
            'Instructed foundational to advanced technology tracks, bridging the gap between theoretical knowledge and industry application.',
            'Integrated modern tech stacks into government initiatives, improving process efficiency and digital footprint.',
        ],
    },
    {
        company: 'aipaygo inc.',
        position: 'Front-end Developer',
        start: 'Apr 2021',
        end: 'Jun 2022',
        logo: '/aipaygo_logo_square.png',
        skills: ['React', 'Next.js', 'REST APIs'],
        responsibilities: [
            'Engineered responsive and dynamic user interfaces for fintech applications using React and Next.js.',
            'Collaborated with backend engineers to consume RESTful APIs, reducing data fetch times and improving UI state management.',
            'Orchestrated cross-browser compatibility and responsive design, ensuring a seamless experience across all device platforms.',
        ],
    },
    {
        company: 'Vertex Digital Entertainment Technologies Inc.',
        position: 'UI/UX Designer',
        start: 'May 2020',
        end: 'Nov 2020',
        logo: '/vertex_logo_square.png',
        skills: ['Wireframing', 'Prototyping', 'Design Systems'],
        responsibilities: [
            'Designed intuitive wireframes, mockups, and high-fidelity prototypes for digital entertainment platforms.',
            'Conducted user research and translated demographic feedback into actionable design iterations, boosting user retention metrics.',
            'Established unified design systems and UI component libraries to accelerate the development lifecycle.',
        ],
    },
    {
        company: 'Vanity Health and Wellness',
        position: 'Graphic Artist | Product Designer',
        start: 'Jan 2020',
        end: 'Mar 2020',
        logo: '/vanity_logo_square.png',
        skills: ['Branding', 'Social Media', 'Packaging'],
        responsibilities: [
            "Produced comprehensive visual branding and marketing collateral, directly enhancing the clinic's digital branding.",
            'Developed engaging social media graphical content, increasing online interactions and brand awareness.',
            'Designed packaging and promotional materials to support new product launches and service expansions.',
        ],
    },
    {
        company: 'Digima Web Solutions Inc.',
        position: 'Quality Assurance | Web Tester',
        start: 'Jun 2018',
        end: 'Aug 2019',
        logo: '/digima_logo_square.png',
        skills: ['Manual Testing', 'Bug Tracking', 'UI Review'],
        responsibilities: [
            'Executed rigorous manual testing protocols across various client web applications.',
            'Identified, documented, and tracked software defects, collaborating tightly with the development team for prompt resolution.',
            'Assessed UI/UX consistency and functional integrity prior to major deployment phases.',
        ],
    },
];

const GitHubIcon = () => (
    <svg className="fill-current w-4 h-4" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
);

const DownloadIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);

const WorkXP = () => {
    const years = new Date().getFullYear() - 2018;

    return (
        <div className="bg-gray-50">
            <Seo path="/workxp" title="Work Experience" description="Career timeline of John Edward Cabrera: computer instructor at the Provincial Government of Camarines Sur, front-end developer, UI/UX designer and QA tester since 2018." />

            <main className="pb-24">
                <PageHero eyebrow="Experience" title="Career Journey" subtitle="Experience | Growth | Impact">
                    <div className="flex flex-wrap justify-center gap-3">
                        <Button variant="glass" href="https://github.com/dipaaapi" icon={<GitHubIcon />}>View GitHub</Button>
                        <Button variant="primary" href="/PDS-ED.pdf" download icon={<DownloadIcon />}>Download PDS</Button>
                        <Button variant="glass" disabled title="Coming soon">Resume &middot; Coming soon</Button>
                    </div>
                    <div className="flex justify-center gap-3 mt-4">
                        <IconButton tone="dark" label="LinkedIn" href="https://www.linkedin.com/in/john-edward-cabrera-956bba147/" className="hover:bg-[#0A66C2]">
                            <svg className="fill-current w-5 h-5" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.750-.79-1.750-1.764s.784-1.764 1.750-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </IconButton>
                        <IconButton tone="dark" label="Facebook" href="https://www.facebook.com/MasterEd28/" className="hover:bg-[#1877F2]">
                            <svg className="fill-current w-5 h-5" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                        </IconButton>
                    </div>
                </PageHero>

                {/* AT A GLANCE */}
                <div className="w-11/12 max-w-5xl mx-auto -mt-10 relative z-20">
                    <Reveal>
                        <Card className="grid grid-cols-3 divide-x divide-gray-100 p-4 sm:p-6 text-center">
                            {[
                                { value: `${years}+`, label: 'Years' },
                                { value: experiences.length, label: 'Companies' },
                                { value: 'Gov · Tech · Design', label: 'Industries', small: true },
                            ].map((stat) => (
                                <div key={stat.label} className="px-2">
                                    <p className={cn('font-black tracking-tighter text-gray-900', stat.small ? 'text-xs sm:text-base leading-tight pt-1 sm:pt-2' : 'text-2xl sm:text-4xl')}>{stat.value}</p>
                                    <Text variant="caption" className="mt-1">{stat.label}</Text>
                                </div>
                            ))}
                        </Card>
                    </Reveal>
                </div>

                {/* TIMELINE */}
                <section className="w-11/12 max-w-5xl mx-auto mt-16 sm:mt-20">
                    <SectionHeading eyebrow="Timeline" title="Where I've worked" className="mb-12" />

                    <ol className="relative">
                        {/* Rail: left edge on mobile, centered on desktop */}
                        <span aria-hidden="true" className="absolute top-2 bottom-2 left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-red-500 via-gray-200 to-gray-200"></span>

                        {experiences.map((job, i) => {
                            const right = i % 2 === 1;
                            return (
                                <li key={job.company} className="relative pl-12 md:pl-0 pb-10 last:pb-0 md:grid md:grid-cols-2 md:gap-12">
                                    {/* Dot */}
                                    <span aria-hidden="true" className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 flex h-4 w-4">
                                        {job.current && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>}
                                        <span className={cn('relative inline-flex h-4 w-4 rounded-full border-4 border-gray-50', job.current ? 'bg-red-500' : 'bg-gray-400')}></span>
                                    </span>

                                    {/* Date column (desktop only, opposite the card) */}
                                    <div className={cn('hidden md:flex items-start pt-6', right ? 'md:order-1 justify-end' : 'md:order-2 justify-start')}>
                                        <Chip variant={job.current ? 'red' : 'outline'} className="text-xs">{job.start} &ndash; {job.end}</Chip>
                                    </div>

                                    <Reveal delay={80} className={right ? 'md:order-2' : 'md:order-1'}>
                                        <Card as="article" interactive className={cn('group', job.current && 'ring-2 ring-red-500/60')}>
                                            <div className="flex items-start gap-4">
                                                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-gray-50 border border-gray-100 group-hover:bg-red-50 transition-colors">
                                                    <Image src={job.logo} alt={`${job.company} logo`} fill sizes="64px" className="p-2" style={{ objectFit: 'contain' }} />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                                        {job.current && <Chip variant="red">Current</Chip>}
                                                        <Chip variant="muted" className="md:hidden">{job.start} &ndash; {job.end}</Chip>
                                                    </div>
                                                    <Heading as="h3" size="md" className={cn('break-words', job.current ? 'text-red-600' : 'group-hover:text-red-600 transition-colors')}>{job.company}</Heading>
                                                    <Text variant="caption" className="mt-1 text-gray-400">{job.position}</Text>
                                                </div>
                                            </div>

                                            <ul className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                                                {job.responsibilities.map((resp) => (
                                                    <li key={resp} className="flex gap-3">
                                                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400"></span>
                                                        <Text variant="small" className="sm:text-sm">{resp}</Text>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {job.skills.map((s) => <Chip key={s} variant="outline">{s}</Chip>)}
                                            </div>
                                        </Card>
                                    </Reveal>
                                </li>
                            );
                        })}
                    </ol>
                </section>

                {/* SUMMARY */}
                <section className="w-11/12 max-w-5xl mx-auto mt-20">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gray-900 via-slate-800 to-red-900 px-6 py-14 sm:p-16 text-center shadow-2xl">
                            <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-600/25 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative">
                                <SectionHeading
                                    tone="light"
                                    eyebrow="In short"
                                    title="Industry Exposure"
                                    description="“From ensuring digital quality in Pasay to instructing the next generation of designers in Camarines Sur, my career has been a balance of technical execution and creative leadership.”"
                                />
                                <div className="mt-8 flex flex-wrap justify-center gap-3">
                                    <Button variant="primary" href="/projects">See the work</Button>
                                    <Button variant="glass" href="/skills">Skills</Button>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default WorkXP;

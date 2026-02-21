'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const experiences = [
	{
		title: "Software Engineer",
		company: "Wells Fargo",
		location: "Hyderabad, India",
		period: "Aug 2023 - Jul 2025",
		type: "Full Time",
		image: "/experience/wells-fargo.png",
		certificateUrl: "/files/experience_pdf/azeez_wellsfargo_experience.pdf",
		description: [
			"Designed and owned distributed backend systems (Java, Hadoop, SQL Server) processing 100 million+ daily records, engineering fault-tolerant workflow orchestration across parallel compute clusters",
			"Optimized query execution plans on high-cardinality joins by implementing partitioning and bucketing strategies in Hive, reducing shuffle overhead and cutting average processing time by 20% with improved SLA compliance",
			"Worked on incremental data ingestion system (PostgreSQL, MongoDB, SQL Server) using CDC patterns over Parquet datasets, eliminating full-table reloads and achieving 3× faster batch runtimes with lower system load",
			"Engineered a full-stack Python service with a Streamlit frontend, using graph algorithms (NetworkX) to visualize and traverse dependency graphs across 20+ systems, reducing root-cause debugging time by ~30%"
		]
	},
	{
		title: "Research Assistant",
		company: "IIT Bombay",
		location: "Mumbai, India",
		period: "Sep 2022 - Aug 2023",
		type: "Research Assistant",
		image: "/experience/iitb.png",
		certificateUrl: "/files/experience_pdf/azeez_iitb_experience.pdf",
		description: [
			"Researched adversarial attack techniques and curated a 15GB+ behavioral dataset from OSquery across 20+ system telemetry SQL tables to train an ML-based threat detection model",
			"Rewrote the C++ detection backend in Node.js to leverage async, event-driven APIs for high-concurrency ingestion, improving system scalability, simplifying deployment, and seamless integration with frontend in React",
			"Architected Kafka streaming pipelines transferring real-time telemetry from Osquery to detection systems, enabling sub-second threat detection and reducing incident response time by 40%"
		]
	},
	{
		title: "Software Development Intern",
		company: "Fiserv",
		location: "Pune, India",
		period: "Jul 2022 - Aug 2022",
		type: "Internship",
		image: "/experience/fiserv.png",
		certificateUrl: "/files/experience_pdf/azeez_fiserv_experience.pdf",
		description: [
			"Developed 3 Spring Boot microservices and 10+ REST APIs (Java, Hibernate ORM, Oracle DB) enabling secure prepaid card issuance and transaction handling with sub-300ms p95 latency",
			"Enforced API rate limiting using Redis (500 req/min per client), reducing failed transactions by 15% and maintaining sub-300ms p95 latency during peak load"
		]
	}
];

const Experience = () => {
	return (
		<div id="experience" className="min-h-screen pt-16 sm:pt-20 px-4 max-w-6xl mx-auto pb-16 sm:pb-20 scroll-mt-16">
			<ScrollAnimation>
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
					<Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
					Professional Experience
				</h2>
			</ScrollAnimation>

			<div className="space-y-8 sm:space-y-12">
				{experiences.map((exp, index) => (
					<ScrollAnimation key={exp.title}>
						<div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
								<div className="p-6 sm:p-8">
									<div className="flex items-center gap-3 mb-4 sm:mb-6">
										<div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
											<Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
										</div>
										<div>
											<h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
											<p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
										</div>
									</div>

									<div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
										<MapPin className="w-4 h-4" />
										<span>{exp.location}</span>
										<span>•</span>
										<span>{exp.period}</span>
									</div>

									<ul className="space-y-3 sm:space-y-4">
										{exp.description.map((item, i) => (
											<li
												key={i}
												className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
											>
												<ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
												<span className="leading-relaxed">{item}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="relative hidden md:block">
									<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
										<img
											src={exp.image}
											alt={exp.company}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent group-hover:scale-105 transition-transform duration-500" />
									</div>
									<div className="relative h-full flex items-end justify-center pb-6">
										<motion.a
											href={exp.certificateUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="px-8 py-3 text-white font-bold bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
											whileHover={{ y: -5 }}
										>
											View Certificate
											<ExternalLink className="w-4 h-4" />
										</motion.a>
									</div>
								</div>

								<div className="md:hidden px-6 pb-6">
									<motion.a
										href={exp.certificateUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 text-sm font-medium"
										whileHover={{ scale: 1.02 }}
									>
										View Certificate
										<ExternalLink className="w-4 h-4" />
									</motion.a>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Experience;
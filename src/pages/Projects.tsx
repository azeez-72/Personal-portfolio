'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'GenAI Platform Support Application',
		description: 'GenAI-powered integrated platform support application that empowers platform support teams with intelligent automation, contextual insights, and seamless incident resolution capabilities. Features agentic incident resolution, AI chatbot assistance, and enterprise data integration.',
		image: '/projects_img/wfhack25.png',
		github: 'https://github.com/azeez-72/WFHack25',
		demo: 'https://drive.google.com/file/d/1SWObk1NMxSSSuhvrcGHs9jWRQoL8HbLa/view?usp=drive_link',
		tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "FAISS", "Ollama", "RAG", "Mistral"]
	},
	{
		title: 'AEGIS - IoT Security System',
		description: 'Intrusion detection and alerting system using eBPF programs to secure IoT devices. Provides network observability statistics, malicious activity alerts, and real-time threat detection with rule-based engine for DoS and ICMP flooding attacks.',
		image: '/projects_img/aegis-hub.png',
		github: 'https://github.com/azeez-72/aegis-hub',
		demo: 'https://tome.app/kernel-krypts/refaktor-hackathon-kernel-krypts-aegis-clejk95n00054enhly9nwa0rm',
		tags: ["eBPF", "Rust", "Python", "Flask", "Raspberry Pi", "IoT Security", "Network Monitoring", "Intrusion Detection"]
	},
	{
		title: 'Qwen GradCAM Evaluation',
		description: 'Panel-level attribution study on MuSciClaims scientific figure dataset. Investigates visual grounding behavior of Qwen 2.5 VL model across multiple baselines, achieving 87.81% accuracy in guided claim verification with systematic Grad-CAM analysis.',
		image: '/projects_img/qwen-gradcam.jpeg',
		github: 'https://github.com/azeez-72/Qwen-GradCAM-Evaluation',
		live: '',
		tags: ["Python", "PyTorch", "Grad-CAM", "Vision-Language Models", "Scientific Computing", "Qwen 2.5 VL", "AI Research"]
	},
	{
		title: 'Knox - P2P Chat Application',
		description: 'Peer-to-peer mobile chat application with no server intermediary, ensuring user privacy and security. Features alias creation, text/file messaging, peer blocking, and direct socket-based communication within same network.',
		image: '/projects_img/knox.png',
		github: 'https://github.com/azeez-72/Knox',
		demo: 'https://github.com/pk-218/KotlinX/releases/download/v1.0.0/app-debug.apk',
		tags: ["Kotlin", "Android", "MVVM", "Jetpack Libraries", "Hilt", "Coroutines", "Socket Programming"]
	},
	{
		title: 'Dwarpaal - DGX Management Portal',
		description: 'Web portal for managing Nvidia DGX system access and monitoring. Simplifies user account creation, provides unified kernel usage statistics, GPU/memory monitoring, and eliminates manual paperwork for academic research access.',
		image: '/projects_img/dwarpal.png',
		github: 'https://github.com/azeez-72/dwarpal',
		live: '',
		tags: ["Go", "React", "Nodejs", "PostgreSQL"]
	},
	{
		title: 'EcoConnect - Waste Management',
		description: 'Connects households to NGOs for recyclable waste collection and processing. Features ML-powered garbage classification using AutoML Vision Edge, Google Maps integration, and scheduled pickup notifications.',
		image: '/projects_img/ecoconnect.jpeg',
		github: 'https://github.com/azeez-72/EcoConnect',
		demo: 'https://youtu.be/bsOMK3T-6Yw',
		tags: ["Kotlin", "Android", "MVVM", "Firebase", "AutoML Vision Edge", "Google Cloud Platform"]
	}
];

const Projects = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map(tag => (
										<span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
											{tag}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a href={project.github} target="_blank" rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>
									{project.demo && (
										<a href={project.demo} target="_blank" rel="noopener noreferrer"
											className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
											<ExternalLink className="w-4 h-4" />
											<span>Demo</span>
										</a>
									)}
								</div>
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;
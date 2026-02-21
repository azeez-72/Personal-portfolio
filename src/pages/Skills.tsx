'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, Brain,
	Cloud, Terminal, Wrench, Sparkles,
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	JavaScriptLogo, ReactLogo, TypeScriptLogo, NodeLogo,
	MongoDBLogo, VSCodeLogo, GitLogo,
} from '@/components/TechLogos';

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "Python", icon: <Code2 className="w-5 h-5" /> },
      { name: "Java", icon: <Code2 className="w-5 h-5" /> },
      { name: "C++", icon: <Code2 className="w-5 h-5" /> },
      { name: "C", icon: <Code2 className="w-5 h-5" /> },
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "TypeScript", icon: <TypeScriptLogo /> },
      { name: "Kotlin", icon: <Code2 className="w-5 h-5" /> },
      { name: "Go", icon: <Code2 className="w-5 h-5" /> },
      { name: "SQL", icon: <Code2 className="w-5 h-5" /> },
      { name: "Shell (Bash)", icon: <Terminal className="w-5 h-5" /> },
      { name: "HTML/CSS", icon: <Layout className="w-5 h-5" /> },
      { name: "XML", icon: <Code2 className="w-5 h-5" /> },
    ],
  },
  {
    category: "ML/AI",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "PyTorch", icon: <Sparkles className="w-5 h-5" /> },
      { name: "TensorFlow", icon: <Sparkles className="w-5 h-5" /> },
      { name: "Scikit-learn", icon: <Sparkles className="w-5 h-5" /> },
      { name: "NumPy", icon: <Sparkles className="w-5 h-5" /> },
      { name: "Pandas", icon: <Sparkles className="w-5 h-5" /> },
      { name: "Matplotlib", icon: <Sparkles className="w-5 h-5" /> },
      { name: "LangChain", icon: <Sparkles className="w-5 h-5" /> },
      { name: "LangGraph", icon: <Sparkles className="w-5 h-5" /> },
      { name: "MCP", icon: <Sparkles className="w-5 h-5" /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React", icon: <ReactLogo /> },
      { name: "Spring Boot", icon: <Server className="w-5 h-5" /> },
      { name: "FastAPI", icon: <Server className="w-5 h-5" /> },
      { name: "Django", icon: <Server className="w-5 h-5" /> },
      { name: "Streamlit", icon: <Layout className="w-5 h-5" /> },
      { name: "Flask", icon: <Server className="w-5 h-5" /> },
      { name: "Android", icon: <Layout className="w-5 h-5" /> },
      { name: "Node.js", icon: <NodeLogo /> },
      { name: "JUnit", icon: <Wrench className="w-5 h-5" /> },
      { name: "gRPC", icon: <Server className="w-5 h-5" /> },
    ],
  },
  {
    category: "Databases & Cloud",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
      { name: "MySQL", icon: <Database className="w-5 h-5" /> },
      { name: "MongoDB", icon: <MongoDBLogo /> },
      { name: "Redis", icon: <Database className="w-5 h-5" /> },
      { name: "Oracle", icon: <Database className="w-5 h-5" /> },
      { name: "Cloud Firestore", icon: <Cloud className="w-5 h-5" /> },
      { name: "GCP", icon: <Cloud className="w-5 h-5" /> },
      { name: "Azure", icon: <Cloud className="w-5 h-5" /> },
      { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
      { name: "Kafka", icon: <Database className="w-5 h-5" /> },
      { name: "Spark", icon: <Database className="w-5 h-5" /> },
      { name: "GraphQL", icon: <Database className="w-5 h-5" /> },
      { name: "FAISS", icon: <Database className="w-5 h-5" /> },
      { name: "ChromaDB", icon: <Database className="w-5 h-5" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "Git", icon: <GitLogo /> },
      { name: "Linux", icon: <Terminal className="w-5 h-5" /> },
      { name: "Docker", icon: <Wrench className="w-5 h-5" /> },
      { name: "Hadoop", icon: <Wrench className="w-5 h-5" /> },
      { name: "Hive", icon: <Wrench className="w-5 h-5" /> },
      { name: "HDFS", icon: <Wrench className="w-5 h-5" /> },
      { name: "Kubernetes", icon: <Wrench className="w-5 h-5" /> },
      { name: "Jenkins", icon: <Wrench className="w-5 h-5" /> },
      { name: "CI/CD", icon: <Wrench className="w-5 h-5" /> },
      { name: "REST API", icon: <Server className="w-5 h-5" /> },
      { name: "VS Code", icon: <VSCodeLogo /> },
    ],
  },
];

const Skills = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
			</ScrollAnimation>

			<ScrollAnimation>
				<p className="text-gray-400 mb-12 max-w-2xl">
					A comprehensive overview of my technical expertise and tools I work with
				</p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map((skillGroup, index) => (
					<ScrollAnimation key={skillGroup.category}>
						<div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
							<div className="flex items-center space-x-3 mb-6">
								<div className="p-2 bg-white/10 rounded-lg">
									{skillGroup.icon}
								</div>
								<h3 className="text-lg font-semibold">{skillGroup.category}</h3>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{skillGroup.items.map((skill, skillIndex) => (
									<div
										key={skill.name}
										className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
									>
										<div className="text-gray-400 group-hover:text-white transition-colors">
											{skill.icon}
										</div>
										<span className="text-gray-400 group-hover:text-white transition-colors text-sm">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Skills;
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-blue-500/30">
			{/* Navigation */}
			<header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
				<div className="container mx-auto px-4 h-16 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">V</div>
						<span className="text-xl font-bold tracking-tight">VNX Dev</span>
					</div>
					<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
						<a href="#services" className="hover:text-blue-500 transition-colors">Serviços</a>
						<a href="#about" className="hover:text-blue-500 transition-colors">Sobre</a>
						<a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfólio</a>
						<a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">Contatos</a>
					</nav>
					<button className="md:hidden p-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
					</button>
				</div>
			</header>

			<main className="flex-grow pt-16">
				{/* Hero Section */}
				<section className="relative py-20 lg:py-32 overflow-hidden">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
						<div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
						<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]"></div>
					</div>

					<div className="container mx-auto px-4 text-center">
						<div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20">
							Especialistas em Desenvolvimento Web
						</div>
						<h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
							Transformamos suas Ideias em <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Realidade Digital</span>
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
							Desenvolvemos soluções de software sob medida com foco em performance, escalabilidade e design moderno para impulsionar o seu negócio.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all">
								Iniciar Projeto
							</a>
							<a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-secondary font-semibold rounded-xl border border-white/10 hover:bg-white/5 transition-all">
								Ver Portfólio
							</a>
						</div>
					</div>
				</section>

				{/* Services Section */}
				<section id="services" className="py-20 bg-black/5 dark:bg-white/5">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-3xl lg:text-4xl font-bold mb-4">Nossos Serviços</h2>
							<p className="text-muted-foreground">Soluções completas para todas as suas necessidades tecnológicas</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[
								{
									title: "Desenvolvimento Web",
									description: "Aplicações web modernas, rápidas e responsivas utilizando as tecnologias mais recentes.",
									icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
								},
								{
									title: "Apps Mobile",
									description: "Desenvolvimento nativo e cross-platform para iOS e Android com UX excepcional.",
									icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
								},
								{
									title: "UI/UX Design",
									description: "Interfaces intuitivas e experiências centradas no usuário que geram engajamento.",
									icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
								}
							].map((service, i) => (
								<div key={i} className="group p-8 bg-background border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/5">
									<div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
										</svg>
									</div>
									<h3 className="text-xl font-bold mb-3">{service.title}</h3>
									<p className="text-muted-foreground leading-relaxed">{service.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* About Section */}
				<section id="about" className="py-20">
					<div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
						<div className="lg:w-1/2 relative">
							<div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
								<span className="text-blue-500/50 text-8xl font-black">VNX</span>
							</div>
							<div className="absolute -bottom-6 -right-6 p-6 bg-blue-600 rounded-2xl shadow-xl hidden md:block">
								<div className="text-3xl font-bold text-white">5+ Anos</div>
								<div className="text-blue-100">de Experiência</div>
							</div>
						</div>
						<div className="lg:w-1/2">
							<h2 className="text-3xl lg:text-4xl font-bold mb-6">Sobre a VNX Dev</h2>
							<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
								Somos uma equipe apaixonada por tecnologia e inovação. Nossa missão é ajudar empresas de todos os tamanhos a alcançarem seu potencial máximo através de soluções digitais de excelência.
							</p>
							<div className="space-y-4">
								{["Foco na Experiência do Usuário", "Código Limpo e Escalável", "Metodologias Ágeis", "Transparência Total"].map((item, i) => (
									<div key={i} className="flex items-center gap-3 font-medium">
										<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
										{item}
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Portfolio Placeholder */}
				<section id="portfolio" className="py-20 bg-black/5 dark:bg-white/5">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-12">Nosso Portfólio</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{[1, 2, 3].map((item) => (
								<div key={item} className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-video bg-muted flex items-center justify-center">
									<span className="text-muted-foreground font-medium italic">Espaço para Projeto {item}</span>
									<div className="absolute inset-0 bg-blue-600/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6 text-white">
										<h4 className="text-xl font-bold mb-2">Nome do Projeto</h4>
										<p className="text-sm text-center mb-4">Breve descrição do que foi desenvolvido para o cliente.</p>
										<span className="px-4 py-2 border border-white rounded-full text-xs font-bold">Ver Case</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-20">
					<div className="container mx-auto px-4 max-w-4xl">
						<div className="bg-background border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
							<div className="text-center mb-10">
								<h2 className="text-3xl lg:text-4xl font-bold mb-4">Vamos Conversar?</h2>
								<p className="text-muted-foreground">Pronto para tirar sua ideia do papel? Mande uma mensagem!</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
								<div>
									<label className="block text-sm font-medium mb-2">Nome</label>
									<input type="text" placeholder="Seu nome" className="w-full px-4 py-3 rounded-xl bg-secondary border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" />
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">Email</label>
									<input type="email" placeholder="seu@email.com" className="w-full px-4 py-3 rounded-xl bg-secondary border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" />
								</div>
								<div className="md:col-span-2">
									<label className="block text-sm font-medium mb-2">Mensagem</label>
									<textarea rows={4} placeholder="Como podemos te ajudar?" className="w-full px-4 py-3 rounded-xl bg-secondary border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"></textarea>
								</div>
							</div>

							<button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
								Enviar Mensagem
							</button>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="py-12 border-t border-white/10">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
						<div className="flex items-center gap-2">
							<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">V</div>
							<span className="text-xl font-bold tracking-tight">VNX Dev</span>
						</div>
						<div className="flex gap-6 text-sm text-muted-foreground font-medium">
							<a href="#" className="hover:text-foreground transition-colors">Instagram</a>
							<a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
							<a href="#" className="hover:text-foreground transition-colors">GitHub</a>
						</div>
					</div>
					<div className="text-center text-sm text-muted-foreground">
						© {new Date().getFullYear()} VNX Dev. Todos os direitos reservados.
					</div>
				</div>
			</footer>
		</div>
	);
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTerminal } from '@fortawesome/free-solid-svg-icons';


const navItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'Credentials', path: '/#credentials' },
	{ name: 'Testimonials', path: '/testimonials' },
	{ name: 'Contact', path: '/contact' },
];

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Prevent body scrolling when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.classList.add('mobile-menu-open');
		} else {
			document.body.classList.remove('mobile-menu-open');
		}
		
		// Cleanup on unmount
		return () => {
			document.body.classList.remove('mobile-menu-open');
		};
	}, [isMobileMenuOpen]);

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 ${
				isScrolled
					? 'bg-background border-b border-border shadow-lg'
					: 'bg-background shadow-md'
			}`}
		>
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Enhanced Professional Logo */}
					<Link to="/" className="flex items-center space-x-4 group">
						<div className="relative">
							{/* Animated background glow */}
							<div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500 animate-pulse"></div>
							
							{/* Main logo container */}
							<div className="relative w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-2xl border border-white/10 group-hover:border-white/20">
								{/* Inner glow effect */}
								<div className="absolute inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"></div>
								
								{/* Logo text */}
								<span className="relative text-white font-orbitron font-black text-xl tracking-wider drop-shadow-lg">
									R
								</span>
								
								{/* Animated corner accents */}
								<div className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-primary rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
							</div>
							
							{/* Rotating ring */}
							<div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary/50 to-accent/50 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
						</div>
						
						{/* Brand text */}
						<div className="hidden sm:flex flex-col">
							<div className="flex items-center space-x-2">
								<span className="font-orbitron text-xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-shine">
									PORTFOLIO
								</span>
								<div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
							</div>
							<span className="text-xs text-muted-foreground font-mono tracking-[0.3em] opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
								DEVELOPER
							</span>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<div key={item.path}>
								{item.name === 'Credentials' ? (
									<button
										onClick={() => {
											const element = document.getElementById('credentials');
											if (element) {
												element.scrollIntoView({ behavior: 'smooth' });
											}
										}}
										className="nav-link text-sm font-medium px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground"
									>
										{item.name}
									</button>
								) : (
									<Link
										to={item.path}
										className={`nav-link text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
											location.pathname === item.path
												? 'text-primary active'
												: 'text-muted-foreground hover:text-foreground'
										}`}
									>
										{item.name}
									</Link>
								)}
							</div>
						))}
					</div>

					{/* Enhanced Resume Button & Mobile Menu */}
					<div className="flex items-center space-x-4">
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="hidden sm:block"
						>
							<Button
								variant="outline"
								size="sm"
								className="relative group bg-gradient-to-r from-card/50 to-card/30 border-2 border-primary/20 hover:border-primary/40 text-primary hover:text-white transition-all duration-300 overflow-hidden"
							>
								{/* Animated background */}
								<div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								
								{/* Button content */}
								<div className="relative flex items-center space-x-2">
									<span className="font-medium tracking-wide">Resume</span>
									<motion.div
										animate={{ rotate: [0, 10, -10, 0] }}
										transition={{ duration: 2, repeat: Infinity }}
									>
										<ExternalLink className="w-4 h-4" />
									</motion.div>
								</div>
								
								{/* Shimmer effect */}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
							</Button>
						</motion.div>

						

						{/* Mobile Menu Button */}
						<Button
							variant="ghost"
							size="sm"
							className="md:hidden"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Sliding Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<>
							{/* Backdrop Overlay */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="fixed inset-0 bg-black/60 backdrop-blur-sm mobile-nav-backdrop md:hidden"
								onClick={() => setIsMobileMenuOpen(false)}
							/>
							
							{/* Sliding Sidebar */}
							<motion.div
								initial={{ x: "100%" }}
								animate={{ x: 0 }}
								exit={{ x: "100%" }}
								transition={{ 
									type: "spring", 
									stiffness: 300, 
									damping: 30,
									mass: 0.8
								}}
								className="fixed top-0 right-0 mobile-nav-sidebar mobile-nav-content w-[85vw] max-w-sm bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-2xl border-l border-border md:hidden shadow-2xl"
							>
								{/* Header */}
								<div className="mobile-nav-header flex items-center justify-between p-4 sm:p-6 border-b border-border">
									<div className="flex items-center space-x-2 sm:space-x-3">
										<div className="relative">
											<div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center">
												<span className="text-white font-orbitron font-black text-base sm:text-lg">R</span>
											</div>
											<div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-pulse"></div>
										</div>
										<div>
											<h3 className="font-orbitron font-bold text-base sm:text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
												PORTFOLIO
											</h3>
											<p className="text-[10px] sm:text-xs text-muted-foreground font-mono tracking-wider">
												DEVELOPER
											</p>
										</div>
									</div>
									<Button
										variant="ghost"
										size="sm"
										onClick={() => setIsMobileMenuOpen(false)}
										className="p-2 hover:bg-white/10 rounded-full border border-white/20 backdrop-blur-sm"
									>
										<X className="w-5 h-5" />
									</Button>
								</div>

								{/* Navigation Items */}
								<div className="mobile-nav-container flex flex-col p-4 sm:p-6 space-y-1 sm:space-y-2 overflow-y-auto">
									{navItems.map((item, index) => (
										<motion.div
											key={item.path}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
											className="mobile-nav-item"
										>
											{item.name === 'Credentials' ? (
												<button
													onClick={() => {
														const element = document.getElementById('credentials');
														if (element) {
															element.scrollIntoView({ behavior: 'smooth' });
														}
														setIsMobileMenuOpen(false);
													}}
													className="flex items-center px-3 py-2 sm:px-4 sm:py-3 rounded-xl transition-all duration-300 group text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-white/10 border border-transparent w-full text-left"
												>
													<div className="flex items-center space-x-2 sm:space-x-3">
														<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 bg-muted-foreground/30 group-hover:bg-primary/50"></div>
														<span className="font-medium text-sm sm:text-base">{item.name}</span>
													</div>
												</button>
											) : (
												<Link
													to={item.path}
													onClick={() => setIsMobileMenuOpen(false)}
													className={`flex items-center px-3 py-2 sm:px-4 sm:py-3 rounded-xl transition-all duration-300 group ${
														location.pathname === item.path
															? 'bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/20'
															: 'text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-white/10 border border-transparent'
													}`}
												>
													<div className="flex items-center space-x-2 sm:space-x-3">
														<div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
															location.pathname === item.path ? 'bg-primary' : 'bg-muted-foreground/30 group-hover:bg-primary/50'
														}`}></div>
														<span className="font-medium text-sm sm:text-base">{item.name}</span>
													</div>
												</Link>
											)}
										</motion.div>
									))}

									{/* Resume Button */}
									<motion.div
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.4 }}
										className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-border"
									>
										<Button
											variant="outline"
											size="sm"
											className="w-full relative group bg-gradient-to-r from-card/50 to-card/30 border-2 border-primary/20 hover:border-primary/40 text-primary hover:text-white transition-all duration-300 overflow-hidden"
										>
											{/* Animated background */}
											<div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											
											{/* Button content */}
											<div className="relative flex items-center justify-center space-x-2">
												<span className="font-medium tracking-wide text-sm sm:text-base">Resume</span>
												<motion.div
													animate={{ rotate: [0, 10, -10, 0] }}
													transition={{ duration: 2, repeat: Infinity }}
												>
													<ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
												</motion.div>
											</div>
											
											{/* Shimmer effect */}
											<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
										</Button>
									</motion.div>

									{/* Footer */}
									<motion.div
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.5 }}
										className="mobile-nav-footer mt-6 pt-4 sm:mt-8 sm:pt-6 border-t border-border text-center"
									>
										<p className="text-xs sm:text-sm text-muted-foreground">
											© 2025 Rushil Chauhan
										</p>
										<p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
											Full Stack Developer
										</p>
									</motion.div>
								</div>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
}
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="py-12 border-t border-white/10 bg-[#020010]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="text-gray-400">
                    Crafted with <span className="text-red-500">❤️</span> by <span className="text-white font-semibold">W3setup</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="mailto:arunesh@w3setup.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

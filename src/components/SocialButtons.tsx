
import { Instagram, MessageCircle } from 'lucide-react';

const SocialButtons = () => {
  return (
    <div className="fixed right-6 top-1/3 z-40 flex flex-col space-y-3 animate-fade-in">
      <a 
        href="https://instagram.com/micheleconsultora_mkt" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all"
        aria-label="Instagram"
      >
        <Instagram />
      </a>
      <a 
        href="https://wa.me/5511952156866" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all"
        aria-label="WhatsApp"
      >
        <MessageCircle />
      </a>
    </div>
  );
};

export default SocialButtons;

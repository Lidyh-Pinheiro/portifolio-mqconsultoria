
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Book } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 
        ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className={`text-2xl font-bold ${isScrolled ? 'text-mq-blue' : 'text-white'} flex items-center`}>
            <span className="text-3xl font-display">MQ</span>
            <span className="ml-2 text-sm hidden md:block">Michele Queiroz</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${isScrolled ? 'text-mq-blue-800' : 'text-white'} hover:text-mq-light-blue transition-colors`}>
            Início
          </Link>
          <Link to="/#quem-somos" className={`${isScrolled ? 'text-mq-blue-800' : 'text-white'} hover:text-mq-light-blue transition-colors`}>
            Quem Somos
          </Link>
          <Link to="/#servicos" className={`${isScrolled ? 'text-mq-blue-800' : 'text-white'} hover:text-mq-light-blue transition-colors`}>
            Serviços
          </Link>
          <Link to="/#contato" className={`${isScrolled ? 'text-mq-blue-800' : 'text-white'} hover:text-mq-light-blue transition-colors`}>
            Contato
          </Link>
          <Link to="/cursos" className="btn-primary py-2 flex items-center">
            <Book className="mr-2" size={18} />
            Cursos
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-mq-blue' : 'text-white'}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-mq-blue-800 hover:text-mq-light-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/#quem-somos" 
              className="text-mq-blue-800 hover:text-mq-light-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link 
              to="/#servicos" 
              className="text-mq-blue-800 hover:text-mq-light-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/#contato" 
              className="text-mq-blue-800 hover:text-mq-light-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <Link 
              to="/cursos" 
              className="btn-primary text-center flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Book className="mr-2" size={18} />
              Cursos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

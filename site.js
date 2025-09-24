import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 75 }
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Django', level: 70 },
      { name: 'REST APIs', level: 85 },
      { name: 'GraphQL', level: 65 }
    ],
    other: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 }
    ]
  };

  const experiences = [
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Tech Solutions Inc.',
      period: '2022 - Presente',
      description: 'Desenvolvimento de aplicações web escaláveis usando React e Node.js. Liderança técnica em projetos de transformação digital.'
    },
    {
      title: 'Desenvolvedor Frontend',
      company: 'Startup XYZ',
      period: '2020 - 2022',
      description: 'Criação de interfaces responsivas e otimizadas. Implementação de design systems e componentes reutilizáveis.'
    },
    {
      title: 'Bootcamp Full Stack',
      company: 'DevMaster Academy',
      period: '2019 - 2020',
      description: 'Formação intensiva em desenvolvimento web moderno, com foco em JavaScript, React, Node.js e bancos de dados.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Header/Navigation */}
      <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-900/90 backdrop-blur-sm border-b border-gray-800' : 'bg-white/90 backdrop-blur-sm border-b border-gray-200'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Dev</span>
              <span>Portfolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} ${activeSection === section ? (darkMode ? 'text-blue-400' : 'text-blue-600') : ''}`}
                >
                  {section === 'home' ? 'Início' : section}
                </button>
              ))}
            </nav>
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-700">
              {['home', 'about', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 px-4 capitalize transition-colors duration-200 hover:${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-gray-100 text-blue-600'} ${activeSection === section ? (darkMode ? 'text-blue-400' : 'text-blue-600') : ''}`}
                >
                  {section === 'home' ? 'Início' : section}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>João Silva</span>
                </h1>
                <h2 className="text-xl md:text-2xl mb-6 font-semibold">
                  Desenvolvedor Full Stack
                </h2>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                  Transformo ideias em código, criando soluções digitais que impactam pessoas e negócios.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection('skills')}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      darkMode 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Ver Portfólio
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                        : 'bg-white hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    Contato
                  </button>
                  <button
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                        : 'bg-white hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    Currículo (PDF)
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ${
                  darkMode ? 'shadow-2xl shadow-blue-500/20' : 'shadow-2xl shadow-blue-500/10'
                }`}>
                  <img
                    src="https://placehold.co/400x400/3b82f6/ffffff?text=JS"
                    alt="João Silva - Desenvolvedor Full Stack"
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'} animate-pulse`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Sobre <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Mim</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 leading-relaxed">
                  Sou um desenvolvedor apaixonado por tecnologia, com mais de 4 anos de experiência criando soluções web modernas e escaláveis. 
                  Nascido em São Paulo, sempre fui fascinado pela capacidade da tecnologia de transformar ideias em realidade.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Minha especialidade está em desenvolvimento full stack, com foco em criar experiências de usuário excepcionais 
                  combinadas com arquiteturas backend robustas e escaláveis.
                </p>
                <p className="text-lg leading-relaxed">
                  Fora do trabalho, contribuo com projetos open source, participo de hackathons e estou sempre explorando 
                  novas tecnologias, especialmente em automação e inteligência artificial.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm`}>
                <h3 className="text-xl font-bold mb-4">Minhas Paixões</h3>
                <ul className="space-y-3">
                  {[
                    'Desenvolvimento de aplicações web modernas',
                    'Contribuição para projetos open source',
                    'Automação de processos e tarefas',
                    'Exploração de IA e machine learning',
                    'Participação em comunidades tech',
                    'Mentoria para desenvolvedores iniciantes'
                  ].map((passion, index) => (
                    <li key={index} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                      {passion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Minhas <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Habilidades</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className={`p-6 rounded-xl transition-all duration-300 ${
                  darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-100/50 hover:bg-gray-100'
                }`}>
                  <h3 className="text-xl font-bold mb-6 capitalize">
                    {category === 'frontend' ? 'Frontend' : 
                     category === 'backend' ? 'Backend' : 'Outros'}
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{skill.level}%</span>
                        </div>
                        <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                              darkMode ? 'bg-blue-500' : 'bg-blue-600'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Experiência & <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Formação</span>
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl transition-all duration-300 ${
                    darkMode ? 'bg-gray-900/50 hover:bg-gray-900' : 'bg-white/50 hover:bg-white'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{exp.company}</p>
                    </div>
                    <span className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Contato</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Vamos Trabalhar Juntos</h3>
                <p className="text-lg mb-8 leading-relaxed">
                  Estou sempre aberto a novos desafios e oportunidades. Se você tem um projeto interessante 
                  ou quer discutir ideias, sinta-se à vontade para entrar em contato.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className={`w-5 h-5 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>joao.silva@email.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className={`w-5 h-5 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+55 (11) 98765-4321</span>
                  </div>
                  <div className="flex items-center">
                    <svg className={`w-5 h-5 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>São Paulo, Brasil</span>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  {[
                    { icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', label: 'LinkedIn' },
                    { icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22', label: 'GitHub' },
                    { icon: 'M12 2.25a3.375 3.375 0 013.375 3.375v1.5c0 .621-.504 1.125-1.125 1.125H5.625A1.125 1.125 0 014.5 6.75v-1.5A3.375 3.375 0 017.875 1.875h4.25zm0 12.75h4.5a1.125 1.125 0 001.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H10.5m0 0a3.375 3.375 0 00-3.375 3.375v1.5c0 .621.504 1.125 1.125 1.125h4.5z', label: 'Medium' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                        darkMode 
                          ? 'bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white' 
                          : 'bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white'
                      }`}
                      aria-label={social.label}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                <h3 className="text-xl font-bold mb-6">Envie uma Mensagem</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full p-3 rounded-lg transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-900 border-gray-700 focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full p-3 rounded-lg transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-900 border-gray-700 focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full p-3 rounded-lg transition-colors duration-200 ${
                        darkMode 
                          ? 'bg-gray-900 border-gray-700 focus:border-blue-500' 
                          : 'bg-white border-gray-300 focus:border-blue-500'
                      } border focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                      placeholder="Sua mensagem..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                      darkMode 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} João Silva. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:underline">Política de Privacidade</a>
              <a href="#" className="text-sm hover:underline">Termos de Serviço</a>
              <a href="#" className="text-sm hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
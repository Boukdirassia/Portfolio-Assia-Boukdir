import React, { useState, useEffect } from 'react';

const languages = [
  'Welcome',
  'Bienvenue',
  'مرحبا',
  'Bienvenido',
  'ようこそ',
  '欢迎',
];

const LoadingScreen = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const languageInterval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentLanguageIndex((prevIndex) => {
          if (prevIndex >= languages.length - 1) {
            clearInterval(languageInterval);
            return prevIndex;
          }
          return prevIndex + 1;
        });
        setShow(true);
      }, 500); // Time for fade-out animation
    }, 900); // Change language every 0.9 seconds

    return () => clearInterval(languageInterval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-800 via-secondary-800 to-dark-900 z-50 overflow-hidden">
      <div
        className={`transition-all duration-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <span className="text-white text-5xl font-bold font-sans animate-text-glow">
            {languages[currentLanguageIndex]}
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;

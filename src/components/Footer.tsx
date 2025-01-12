import React from 'react';
import { getCurrentDate } from '../utils';

const Footer: React.FC = () => {
  const displayDate = getCurrentDate();

  const footerLinksArray = [
    { name: 'About', link: '#' },
    { name: 'Privacy Policy', link: '#' },
    { name: 'Licensing', link: '#' },
    { name: 'Contact', link: '#' },
  ];
  return (
    <footer className="bg-white shadow dark:bg-slate-600 z-40 fixed bottom-0 h-12">
      <div className="w-screen p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">
          {displayDate}
          <a href="https://codecrafterslabs.com/" className="hover:underline">
            {' '}
            - CodeCrafters Labs™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {footerLinksArray.map((footerLink) => (
            <li key={footerLink.name} className="me-4 md:me-6">
              <a href={footerLink.link} className="hover:underline">
                {footerLink.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

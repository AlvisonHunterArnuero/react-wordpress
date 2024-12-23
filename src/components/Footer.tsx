import React from 'react';
import { getCurrentDate } from '../utils';

const Footer: React.FC = () => {
    const displayDate = getCurrentDate();
  return (
    <footer className="bg-white shadow dark:bg-slate-600 z-40 fixed bottom-0 border mx-auto max-w-screen-xl">
      <div className="w-screen max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">
          {displayDate}
          <a
            href="https://codecrafterslabs.com/"
            className="hover:underline"
          >
            {' '}
            - CodeCrafters Labs™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

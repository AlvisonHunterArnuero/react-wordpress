import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 text-white p-6 w-screen shadow-md bg-clip-border rounded-xl my-4 flex items-center justify-center">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold tracking-tight leading-none dark:text-white">
            React WordPress Public API Demo
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            The purpose of this application is to connect to the WordPress Public API using React and TypeScript,
            demonstrating how to fetch and display data from a WordPress site.
          </p>
        </div>
      </section>
    </header>
  );
};

export default Header;

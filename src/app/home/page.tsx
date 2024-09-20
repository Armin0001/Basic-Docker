import React from 'react';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Project One', description: 'Description of project one', image: 'project1.jpg' },
    { id: 2, title: 'Project Two', description: 'Description of project two', image: 'project2.jpg' },
    { id: 3, title: 'Project Three', description: 'Description of project three', image: 'project3.jpg' },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold">Armin Isaković</h1>
        <p className="text-xl text-gray-400">Full Stack Developer | Software Engineer </p>
      </header>

      {/* Navigation */}
      </div>
  );
};

export default Portfolio;

"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, link }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="w-full animate-fade-up" style={{ animationDelay: '0.3s' }}>
      <Link href={link} className="group block w-full">
        <div className="relative w-full h-full overflow-hidden bg-pearl-gray rounded-md">
          <div className={`w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={image}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
          {!isLoaded && (
            <div className="absolute inset-0 bg-pearl-gray animate-pulse"></div>
          )}
        </div>
        
        <div className="mt-4 space-y-1">
          <p className="text-sm text-pearl-text-secondary">{category}</p>
          <h3 className="text-md font-medium">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

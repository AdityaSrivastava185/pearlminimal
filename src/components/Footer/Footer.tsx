import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const FooterSection = () => {
  return (
    <footer id='contact' className="w-full bg-black text-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-12 lg:mb-0">
            <h5 className="text-sm font-normal mb-4">Contact</h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-10">
              Let's start<br />creating together
            </h2>
            
            <Button
              variant="outline" 
              className=" hover:bg-gray-100 rounded-full px-6 py-5 h-auto"
              asChild
            >
              <Link href="#" className="flex items-center gap-2">
                Let's talk
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            <div className="flex flex-col space-y-4">
              <Link href="#home" className="text-white hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="#project" className="text-white hover:text-gray-300 transition-colors">
                Work
              </Link>
              <Link href="#about" className="text-white hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-white hover:text-gray-300 transition-colors ">
                Contact
              </Link>
            </div>
            
            <div className="flex flex-col space-y-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between text-white hover:text-gray-300 transition-colors"
              >
                Twitter
               
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between text-white hover:text-gray-300 transition-colors"
              >
                Dribbble
                
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between text-white hover:text-gray-300 transition-colors"
              >
                Instagram
                
              </a>
            </div>
          </div>
        </div>
        <div className='text-start mt-20'>
        Built with laziness by BoringDesigner
      </div>
      </div>
    </footer>
  )
}

export default FooterSection

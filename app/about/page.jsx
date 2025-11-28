import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-green/20 via-white to-brand-green/10 dark:from-brand-dark/50 dark:via-gray-900 dark:to-brand-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a developer
          </p>
        </div>
      </section>

      {/* First Section - About Me */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brand-dark dark:text-white">
                My Story
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a dedicated full stack developer with a passion for creating 
                innovative web solutions. My journey in web development started with 
                a curiosity about how websites work, and it has evolved into a career 
                focused on building user-friendly, scalable applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I enjoy working with modern technologies and am always eager to learn 
                new tools and frameworks. My goal is to create applications that not 
                only look great but also provide exceptional user experiences.
              </p>
            </div>
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/about-me.jpg"
                alt="About Me"
                fill
                className="object-cover"
                quality={95}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Author Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/author-me.jpg"
                alt="Author"
                fill
                className="object-cover"
                quality={95}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-bold text-brand-dark dark:text-white">
                Author Info
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                As a developer, I believe in writing clean, maintainable code and 
                following best practices. I'm committed to continuous learning and 
                staying up-to-date with the latest industry trends and technologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing 
                to open-source projects, and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-brand-dark dark:text-white">
            What I Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-brand-dark dark:text-white">
                  Clean Code
                </CardTitle>
                <CardDescription>
                  Writing maintainable and scalable code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  I prioritize writing clean, well-documented code that is easy to 
                  understand and maintain. This ensures long-term project success.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-brand-dark dark:text-white">
                  User Experience
                </CardTitle>
                <CardDescription>
                  Creating intuitive and delightful interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  User experience is at the heart of everything I build. I focus on 
                  creating interfaces that are both beautiful and functional.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-brand-dark dark:text-white">
                  Continuous Learning
                </CardTitle>
                <CardDescription>
                  Staying updated with latest technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  The tech industry evolves rapidly, and I'm committed to continuous 
                  learning to stay at the forefront of web development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


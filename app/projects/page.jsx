import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Tutor Web Design',
      description: 'A modern and responsive web design project for educational purposes. Built with clean UI/UX principles and modern web technologies.',
      image: '/tutor-web.png',
      link: '#',
      imageAlt: 'Tutor Web Design Project'
    },
    {
      title: 'ProShop',
      description: 'A full-featured e-commerce platform built with modern technologies. Includes shopping cart, payment integration, and admin dashboard.',
      image: '/proshop.png',
      link: '#',
      imageAlt: 'ProShop E-commerce Platform'
    },
    {
      title: 'Tracalory App',
      description: 'An intuitive tracking application with a beautiful user interface. Helps users track and manage their daily activities and goals.',
      image: '/app.png',
      link: '#',
      imageAlt: 'Tracalory Tracking App'
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-green/20 via-white to-brand-green/10 dark:from-brand-dark/50 dark:via-gray-900 dark:to-brand-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, 
            design, and problem-solving
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                imageAlt={project.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-dark dark:text-white">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out!
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-green hover:bg-brand-green/90 text-brand-dark font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}





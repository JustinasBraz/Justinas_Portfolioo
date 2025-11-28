import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export default function ProjectCard({ title, description, image, link, imageAlt }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-brand-dark dark:text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={link || '#'} className="w-full">
          <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-brand-dark">
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}


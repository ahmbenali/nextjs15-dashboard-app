'use client'

import { links } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathname = usePathname()

  const classNames = (href: string) =>
    'flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium leading-6 text-gray-400 hover:text-white hover:bg-gray-800' +
    (pathname === href && ' bg-sky-100 text-blue-600')

  return (
    <>
      {links.map(({ name, href, icon }) => {
        const LinkIcon = icon
        return (
          <Link
            key={name}
            href={href}
            className={classNames(href)}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{name}</p>
          </Link>
        )
      })}
    </>
  )
}

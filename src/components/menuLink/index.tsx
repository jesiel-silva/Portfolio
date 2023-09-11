import Link from 'next/link'

export default function MenuLink({ href, texto }) {

  return (
    <Link href={href}><li>{texto}</li></Link>
  )
}
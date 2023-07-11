import { Link } from 'gatsby'
import * as React from 'react'

const FooterLink = ({itemName,href}) => {
  return (
    <li className='font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]'><Link to={href}>{itemName}</Link></li>
  )
}

export default FooterLink
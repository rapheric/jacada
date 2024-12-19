import React from 'react';

interface MenuItemLinkProps {
  href: string;
  label: string;
  isCurrent?: boolean;
  className: string;
}

const MenuItemLink: React.FC<MenuItemLinkProps> = ({ href, label, isCurrent, className }) => (
  <a href={href} aria-current={isCurrent ? 'page' : undefined} className={className}>
    {label}
  </a>
);

export default MenuItemLink;

import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { profileMenuItems } from './navData';

const ProfileDropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative ml-3">
      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="sr-only">Open user menu</span>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="size-8 rounded-full"
        />
      </MenuButton>
      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
        {profileMenuItems.map((item, idx) => (
          <MenuItem key={idx}>
            {({ active }) => (
              <a
                href={item.href}
                className={`block px-4 py-2 text-sm ${
                  active ? 'bg-gray-100' : ''
                } text-gray-700`}
              >
                {item.label}
              </a>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default ProfileDropdown;


import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigation } from './navData';
import ProfileDropdown from './profileDropDown';
import MenuItemLink from './menuLinks';
import { Link, useNavigate } from 'react-router-dom';
import ThemeSwitcher from '../glo/themeswitcher/themeSwiter';

const  Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Disclosure as="nav" className="bg-gray-900 dark:bg-black shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex  items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton
              onClick={handleMenuToggle}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div onClick={handleLogoClick} className="flex cursor-pointer shrink-0 items-center">
              <img
                alt="Company Logo"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <MenuItemLink
                    key={item.name}
                    href={item.href}
                    label={item.name}
                    className="text-lg font-medium text-gray-300 hover:text-white rounded-md px-3 py-2"
                  />
                ))}
                <Link
                  to="/sign-up"
                  className="text-orange-500 border border-orange-500 p-2 rounded-[10px]"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className='flex items-center justify-center ml-4'>
              <ThemeSwitcher />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <ProfileDropdown />
          </div>
        </div>
      </div>
      <DisclosurePanel className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <DisclosureButton
            as="a"
            href="/login"
            className="block rounded-md px-3 py-2 text-base font-medium text-orange-500 hover:text-white border border-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </DisclosureButton>
          <div className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white">
            <ThemeSwitcher />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;

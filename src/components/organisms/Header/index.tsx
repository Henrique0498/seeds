import { Fragment, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { Icon } from "components/atoms/Icon";

import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { InterfaceSidebarRef } from "../Sidebar/types";
import { Sidebar } from "../Sidebar";

const agriculture = [
  {
    name: "Agricultura sustentável,",
    href: "/agriculture/sustainability",
  },
  {
    name: "Cultivo eficientes",
    href: "/agriculture/efficiency",
  },
];

export function Header() {
  const refSidebar = useRef<InterfaceSidebarRef>(null);

  return (
    <>
      <header className={`${styles.container} p-4 bg-white shadow-sm`}>
        <nav
          className="flex items-center justify-between mx-auto max-w-7xl"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 text-emerald-600">
            <Link to="/" className="p-1.5 flex items-center">
              <Icon icon="logo" className="h-8 w-auto" />
              <span className={styles.logo}>Seeds</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => refSidebar.current?.setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <NavLink
              to="/IAGs"
              className={({ isActive }) =>
                `text-sm font-semibold leading-6 ${
                  isActive ? "text-emerald-600" : ""
                }`
              }
            >
              IAGs
            </NavLink>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
                Agropecuária
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-2">
                    {agriculture.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100"
                      >
                        <div className="flex-auto">
                          <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                              `text-sm font-semibold leading-6 ${
                                isActive ? "text-emerald-600" : ""
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-semibold leading-6 ${
                  isActive ? "text-emerald-600" : ""
                }`
              }
            >
              Contato
            </NavLink>
          </Popover.Group>
        </nav>
      </header>
      <Sidebar ref={refSidebar} />
    </>
  );
}

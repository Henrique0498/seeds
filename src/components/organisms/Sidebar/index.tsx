import { Dialog, Disclosure } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { InterfaceSidebarRef } from "./types";

import styles from "./Sidebar.module.css";
import { Icon } from "components/atoms/Icon";

const agriculture = [
  {
    name: "Agricultura sustentável",
    href: "/agriculture/sustainability",
  },
  {
    name: "Cultivo eficientes",
    href: "/agriculture/efficiency",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Sidebar = forwardRef<InterfaceSidebarRef>((_, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      mobileMenuOpen,
      setMobileMenuOpen,
    };
  });

  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link to="/" className="p-1.5 flex items-center text-emerald-600">
            <Icon icon="logo" className="h-8 w-auto" />
            <span className={styles.logo}>Seeds</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <NavLink
                to="/IAGs"
                className={({ isActive }) =>
                  `text-base font-semibold leading-6 ${
                    isActive ? "text-emerald-600" : ""
                  }`
                }
              >
                IAGs
              </NavLink>

              <Disclosure as="div" className="-mx-3 py-6">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                      Agropecuária
                      <ChevronDownIcon
                        className={classNames(
                          open ? "rotate-180" : "",
                          "h-5 w-5 flex-none"
                        )}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      <div>
                        {agriculture.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                              `font-semibold group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-100
                               ${isActive ? "text-emerald-600" : ""}`
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-semibold leading-6 text-base ${
                    isActive ? "text-emerald-600" : ""
                  }`
                }
              >
                Contato
              </NavLink>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
});

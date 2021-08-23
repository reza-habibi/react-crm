/* This Header requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="w-full mx-auto border-b-2 border-gray-100">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10 px-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 ml-5">
            <Link to="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10 gap-10 ">
            <Link
              to="/dashboard"
              className="text-2xl font-medium text-gray-500 hover:text-gray-900"
            >
              پنل کاربری
            </Link>
            <Link
              to="#"
              className="text-2xl font-medium text-gray-500 hover:text-gray-900"
            >
              تیکت ها
            </Link>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="#"
              className="whitespace-nowrap text-2xl font-medium text-gray-500 hover:text-gray-900"
            >
              ورود
            </Link>
            <Link
              to="#"
              className="mr-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-2xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              ثبت نام
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8"></nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  to="/dashboard"
                  className="text-2xl font-medium text-gray-900 hover:text-gray-700"
                >
                  پنل کاربری
                </Link>

                <Link
                  to="#"
                  className="text-2xl font-medium text-gray-900 hover:text-gray-700"
                >
                  تیکت ها
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-2xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  ثبت نام
                </Link>
                <p className="mt-6 text-center text-xl font-medium text-gray-500 ">
                  حساب کابری دارید ؟
                  <Link
                    to="#"
                    className="text-indigo-600 hover:text-indigo-500 mr-4"
                  >
                    ورود
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

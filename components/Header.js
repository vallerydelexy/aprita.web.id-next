import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline"
import Link from "next/link"
import useThemeStore from "@utils/store/theme.store"
import Logo from "./logo"

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Portfolio", href: "/#portfolio" },
	{ name: "Blog", href: "/blog" },
]

export default function Header({ tagline }) {
	const { mode, setLightMode, setDarkMode } = useThemeStore()
	const isDarkMode = mode === "dark"

	const handleModeToggle = () => {
		isDarkMode ? setLightMode() : setDarkMode()
	}

	return (
		<div className="relative py-4 md:pt-6 z-50 bg-gray-100 dark:bg-gray-900">
			<Popover>
				{({ open }) => (
					<>
						<div className="z-50 max-w-7xl mx-auto px-4 sm:px-6">
							<nav
								className="relative flex items-center justify-between sm:h-10 md:justify-center"
								aria-label="Global">
								<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
									<div className="flex items-center justify-between w-full md:w-auto">
										<Link href="/">
											<Logo className="h-8 w-8 fill-gray-900 dark:fill-gray-100" />
										</Link>

										<Link href="/" passHref legacyBehavior>
											<span className="md:hidden">{tagline}</span>
										</Link>
										<div className="flex gap-4 md:hidden">
											<div className="inline-flex shadow px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 backdrop-filter backdrop-blur-sm bg-white hover:bg-gray-50">
												<button onClick={handleModeToggle}>
													{isDarkMode ? (
														<SunIcon className="h-6 w-6" />
													) : (
														<MoonIcon className="h-6 w-6" />
													)}
												</button>
											</div>
											<div className="flex items-center">
												<Popover.Button className="backdrop-filter backdrop-blur-sm bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
													<span className="sr-only">Open main menu</span>
													<MenuIcon className="h-6 w-6" aria-hidden="true" />
												</Popover.Button>
											</div>
										</div>
									</div>
								</div>
								<div className="gap-4 hidden md:flex md:space-x-10">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											passHref
											legacyBehavior>
											<span
												role="button"
												className="font-medium text-gray-500 dark:text-gray-100">
												{item.name}
											</span>
										</Link>
									))}
								</div>
								<div className="gap-4 hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
									<div className="inline-flex shadow px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 backdrop-filter backdrop-blur-sm bg-white hover:bg-gray-50">
										<button onClick={handleModeToggle}>
											{isDarkMode ? (
												<SunIcon className="h-6 w-6" />
											) : (
												<MoonIcon className="h-6 w-6" />
											)}
										</button>
									</div>
									<span className="inline-flex rounded-md shadow">
										<a
											href="https://wa.me/6281276763536"
											className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 backdrop-filter backdrop-blur-sm bg-white hover:bg-gray-50">
											Hubungi
										</a>
									</span>
								</div>
							</nav>
						</div>

						<Transition
							show={open}
							as={Fragment}
							enter="duration-150 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-100 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">
							<Popover.Panel
								focus
								static
								className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
								<div className="rounded-lg shadow-md backdrop-filter backdrop-blur-sm bg-white/75 ring-1 ring-black ring-opacity-5 overflow-hidden">
									<div className="px-5 pt-4 flex items-center justify-between">
										<div>
											<Logo className="h-8 w-8 dark:fill-gray-900 fill-gray-100" />
										</div>
										<div className="">
											<Popover.Button className="backdrop-filter backdrop-blur-sm bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
												<span className="sr-only">Close menu</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
									<div className="px-2 pt-2 pb-3">
										{navigation.map((item) => (
											<Link
												key={item.name}
												href={item.href}
												passHref
												legacyBehavior>
												<span
													role="button"
													className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
													{item.name}
												</span>
											</Link>
										))}
									</div>
									<a
										href="https://wa.me/6281276763536"
										className="backdrop-filter backdrop-blur-sm block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
										Hubungi
									</a>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	)
}

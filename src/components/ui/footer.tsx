
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <Image src={logo} className="h-8 w-auto me-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{config.appName}</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {config.footerSections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                {/* Dynamic Section Title */}
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    {section.title}
                                </h2>

                                {/* Dynamic Links */}
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="mb-4">
                                            <a href={link.href} className="hover:underline">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {config.copyright.year} <a href={`https://${config.domainName}`} className="hover:underline">{config.appName}™</a>. {config.copyright.message}
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        {config.footerSocialMedia.map((item, index) => (
                            <a key={index} href={item.href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                {item.svg}
                                <span className="sr-only">{item.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

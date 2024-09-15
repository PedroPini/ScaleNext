

const FooterSkeleton = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 animate-pulse">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <div className="w-32 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <div className="mb-6 h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <ul className="space-y-4">
                                <li className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></li>
                                <li className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded"></li>
                            </ul>
                        </div>
                        <div>
                            <div className="mb-6 h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <ul className="space-y-4">
                                <li className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></li>
                                <li className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded"></li>
                            </ul>
                        </div>
                        <div>
                            <div className="mb-6 h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <ul className="space-y-4">
                                <li className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></li>
                                <li className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
                        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSkeleton;

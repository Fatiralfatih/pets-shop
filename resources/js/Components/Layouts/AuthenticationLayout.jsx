import ApplicationLogo from '@/Components/Breeze/ApplicationLogo';
import { Link } from '@inertiajs/react';
import LogoWeb from '../Elements/Logo/LogoWeb';

export default function Authentication({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <LogoWeb />
                </Link>
            </div>

            <div className="w-full max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}

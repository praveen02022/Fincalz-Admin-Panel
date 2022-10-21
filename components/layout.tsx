import Sidebar from '../components/sidebar'
import Nav from './nav'
type LayoutProps = {
    children: React.ReactNode,
};
import { useRouter } from 'next/router';
export default function Layout({ children }: LayoutProps) {
    // console.log(useRouter);
    return (
        <div className="flex flex-col">
            {/* */}
            <div className="flex flex-col md:flex-row flex-1">
                <aside className="w-30 max-w-sm rounded shadow-lg h-screen sticky top-0" aria-label="Sidebar">
                    <Sidebar />
                </aside>
                <div>
                    <header className="bg-white px-2 sm:px-4  mb-10 py-2.5 dark:bg-gray-900 fixed  w-full z-50 border-b border-gray-200 dark:border-gray-600">
                        <Nav />
                    </header>
                    <main className="p-10 mt-12">{children}</main>
                </div>
            </div>
        </div>
    );
}
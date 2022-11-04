import Sidebar from '../components/sidebar'
import Nav from './nav'
import Draggable from 'react-draggable';
type LayoutProps = {
    children: React.ReactNode,
};
// const Dragula = require('react-dragula');
export default function Layout({ children }: LayoutProps) {
    return (

        <div className="flex flex-col">

                <div className="flex flex-col md:flex-row flex-1">

                    <aside className="w-30 max-w-sm rounded shadow-lg h-screen sticky top-0" aria-label="Sidebar">
                        <Sidebar />
                    </aside>
                    <div className='w-full'>
                        <header className="bg-white px-2 sm:px-4  mb-10 py-2.5 dark:bg-gray-900 fixed  z-50 border-b border-gray-200 dark:border-gray-600" style={{ width: '95%' }}>
                            <Nav />
                        </header>
                        <main className="p-10 mt-20 h-full w-full">{children}</main>
                    </div>
                </div>

        </div>

    );
}
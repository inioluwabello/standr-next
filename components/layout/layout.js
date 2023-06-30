import Heading from '../heading';
import TopNav from './top-nav/TopNav';

export default function Layout({ children }) {

    return (
        <>
            <Heading />
            <div className>
                <TopNav />
                <div className>
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}
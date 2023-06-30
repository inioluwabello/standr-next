import Heading from '../heading';
import TopNav from './top-nav/TopNav';

export default function Layout({ children }) {

    return (
        <div style={{paddingBottom: "3rem"}}>
            <Heading />
            <div>
                <TopNav />
                <div className>
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}
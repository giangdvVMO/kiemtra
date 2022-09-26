import '../../styles/nav.css';
import Account from "./Account";
import { MenuNav } from './MenuNav';

const Nav = () => {
    return (
        <div className="nav">
            <div className="left-nav"><MenuNav /></div>
            <div className="right-nav">
                <Account />
            </div>
        </div>
    )
}

export default Nav;
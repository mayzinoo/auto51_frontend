import './styles/MenuHeader.css';
import Navcomponent from './components/Navcomponent'

const MenuHeader = () => {
    return (
        <div className='menuheader menuheader-sticky'>
            <div className='menuheader-row'>
                <Navcomponent />
            </div>
        </div>
    );
};
export default MenuHeader;

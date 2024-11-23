import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/seva">Seva</Link></li>
        <li><Link to="/dailyRoutine">Daily Routine</Link></li>
        <li><Link to="/eKanike">E Kanike</Link></li>
        <li><Link to="/howToReach">How To Reach</Link></li>
        <li><Link to="/utsava">Utsava</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
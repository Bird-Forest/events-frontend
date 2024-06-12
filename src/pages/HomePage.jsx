import EventList from '../components/events/EventList';
import { WrapHomePage } from './Page.styled';
// import { useLocation } from 'react-router-dom';
import FilterPanel from 'components/filter/FilterPanel';
import '../i18n';

export default function HomePage() {
  // const location = useLocation();

  return (
    <WrapHomePage>
      <FilterPanel />
      <EventList />
    </WrapHomePage>
  );
}

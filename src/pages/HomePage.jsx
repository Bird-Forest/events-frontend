import EventList from '../components/events/EventList';
import { WrapPage } from './Page.styled';
import { useLocation } from 'react-router-dom';
import FilterPanel from 'components/filter/FilterPanel';

export default function HomePage() {
  const location = useLocation();

  return (
    <WrapPage>
      <FilterPanel />
      <EventList location={location} />
    </WrapPage>
  );
}

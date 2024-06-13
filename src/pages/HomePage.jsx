import EventList from '../components/events/EventList';
import { WrapHomePage } from './Page.styled';
import FilterPanel from 'components/filter/FilterPanel';
import '../i18n';

export default function HomePage() {
  return (
    <WrapHomePage>
      <FilterPanel />
      <EventList />
    </WrapHomePage>
  );
}

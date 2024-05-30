import EventList from '../components/events/EventList';
import { WrapPage } from './Page.styled';
import { useLocation } from 'react-router-dom';
import FilterPanel from 'components/filter/FilterPanel';
import { useSelector } from 'react-redux';
import {
  selectOrganizer,
  selectPeriod,
  selectSpeciality,
} from '../redux/selectors';

export default function HomePage() {
  const location = useLocation();
  // const param = useParams();
  // console.log(param);
  const organizer = useSelector(selectOrganizer);
  console.log(organizer);
  const speciality = useSelector(selectSpeciality);
  console.log(speciality);
  const period = useSelector(selectPeriod);
  console.log(period);

  return (
    <WrapPage>
      <FilterPanel />
      <EventList location={location} />
    </WrapPage>
  );
}

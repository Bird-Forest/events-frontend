import ViewList from 'components/view/ViewList';
import React, { useEffect, useRef, useState } from 'react';
import { WrapGoBack, WrapPage } from './Page.styled';
import Loading from 'helper/Loading';
import EmptyPage from 'helper/EmptyPage';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  BtnSearch,
  SearchInput,
  ViewWrap,
  WrapInput,
  WrapSearch,
} from 'components/view/View.styled';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { useGetEventByIdQuery } from '../redux/EventSlice';
import { useTranslation } from 'react-i18next';

export default function ViewPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');

  const params = useParams();
  const id = params.id;
  const { data, error, isLoading } = useGetEventByIdQuery(id);

  const participants = data?.participants;

  const [byName, setByName] = useState(' ');
  const [byEmail, setByEmail] = useState(' ');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!participants) return;
    setUsers(participants);
  }, [participants]);

  const getArrByName = () => {
    if (byName !== ' ') {
      const arr = users.filter(user =>
        user.name.toLowerCase().includes(byName.toLowerCase().trim())
      );
      setUsers(arr);
    }
  };
  const getArrByEmail = () => {
    if (byEmail !== ' ') {
      const arr = users.filter(user =>
        user.email.toLowerCase().includes(byEmail.toLowerCase().trim())
      );
      setUsers(arr);
    }
  };
  const clearName = () => {
    setUsers(participants);
    setByName(null);
  };
  const clearEmail = () => {
    setUsers(participants);
    setByEmail(null);
  };

  return (
    <WrapPage>
      <ViewWrap>
        <WrapGoBack>
          <Link to={backHref.current} className="back">
            {t('back')}
          </Link>
        </WrapGoBack>
        <WrapSearch>
          <WrapInput>
            <SearchInput
              name="name"
              type="text"
              placeholder={t('view.name')}
              onChange={evt => setByName(evt.target.value)}
            />
            <BtnSearch type="button" onClick={getArrByName}>
              <BsCheckCircle className="icon-search" />
            </BtnSearch>
            <BtnSearch type="button" onClick={clearName}>
              <BsXCircle className="icon-clear" />
            </BtnSearch>
          </WrapInput>
          <WrapInput>
            <SearchInput
              name="email"
              type="text"
              placeholder={t('view.email')}
              onChange={evt => setByEmail(evt.target.value)}
            />
            <BtnSearch type="button" onClick={getArrByEmail}>
              <BsCheckCircle className="icon-search" />
            </BtnSearch>
            <BtnSearch type="button" onClick={clearEmail}>
              <BsXCircle className="icon-clear" />
            </BtnSearch>
          </WrapInput>
        </WrapSearch>
      </ViewWrap>
      {isLoading ? <Loading /> : <ViewList users={users} />}
      {error && (
        <EmptyPage message={'Ми працюємо над усуненням незручностей'} />
      )}
    </WrapPage>
  );
}

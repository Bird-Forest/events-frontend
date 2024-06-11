import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';
import {
  BtnArrow,
  OptionForm,
  SelectText,
  WrapOptions,
  WrapSelect,
} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { saveOrganizer } from '../../redux/filterSlice';
import { useTranslation } from 'react-i18next';

export default function FilterOrganizer({ organizers }) {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [organizer, setOrganizer] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveOrganizer(organizer));
    return () => {};
  }, [dispatch, organizer]);

  const onClear = () => {
    setOrganizer('');
  };

  return (
    <WrapSelect>
      <SelectText
        type="text"
        id="organizer"
        name="organizer"
        defaultValue={organizer}
        readOnly={organizer}
        placeholder={t('filter.organizer')}
      />
      <BtnArrow onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoIosArrowDown className="icon-arrow" />
        ) : (
          <IoIosArrowUp className="icon-arrow" />
        )}
      </BtnArrow>
      <BtnArrow onClick={onClear}>
        <IoMdClose className="icon-clear" />
      </BtnArrow>
      <WrapOptions
        style={{
          display: !isOpen ? 'none' : 'block',
        }}
      >
        {organizers.map(item => (
          <OptionForm
            key={item}
            name="organizer"
            value={item}
            className="item-font"
            onClick={() => setOrganizer(item)}
          >
            {item}
          </OptionForm>
        ))}
      </WrapOptions>
    </WrapSelect>
  );
}

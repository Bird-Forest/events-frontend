import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
  BtnArrow,
  OptionForm,
  SelectText,
  WrapOptions,
  WrapSelect,
} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { saveSpeciality } from '../../redux/filterSlice';

export default function FilterSpeciality({ specialties }) {
  const [isOpen, setIsOpen] = useState(false);
  const [speciality, setSpeciality] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveSpeciality(speciality));
    return () => {};
  }, [dispatch, speciality]);

  return (
    <WrapSelect>
      <SelectText
        type="text"
        id="speciality"
        name="speciality"
        defaultValue={speciality}
        readOnly={speciality}
        placeholder="select"
      />
      <BtnArrow onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoIosArrowDown className="icon-arrow" />
        ) : (
          <IoIosArrowUp className="icon-arrow" />
        )}
      </BtnArrow>
      <WrapOptions
        style={{
          display: !isOpen ? 'none' : 'block',
        }}
      >
        {specialties.map(item => (
          <OptionForm
            key={item}
            value={item}
            className="item-font"
            onClick={() => setSpeciality(item)}
          >
            {item}
          </OptionForm>
        ))}
      </WrapOptions>
    </WrapSelect>
  );
}

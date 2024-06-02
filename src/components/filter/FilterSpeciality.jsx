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
import { saveSpeciality } from '../../redux/filterSlice';

export default function FilterSpeciality({ specialties }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveSpeciality(title));
    return () => {};
  }, [dispatch, title]);

  const onClear = () => {
    setTitle('');
  };

  return (
    <WrapSelect>
      <SelectText
        type="text"
        id="speciality"
        name="speciality"
        defaultValue={title}
        readOnly={title}
        placeholder="select"
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
        {specialties.map(item => (
          <OptionForm
            key={item}
            value={item}
            className="item-font"
            onClick={() => setTitle(item)}
          >
            {item}
          </OptionForm>
        ))}
      </WrapOptions>
    </WrapSelect>
  );
}

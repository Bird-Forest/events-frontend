import React, { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { BtnLng, ItemLng, ListLng, WrapLng } from './Filter.styled';
import { nanoid } from '@reduxjs/toolkit';

export default function Leanguage() {
  const [isOpen, setIsOpen] = useState();
  const languages = [
    {
      code: 'en',
      country_code: 'gb',
      name: 'English',
    },
    {
      code: 'uk',
      country_code: 'ua',
      name: 'Ukraine',
    },
  ];

  return (
    <WrapLng>
      <BtnLng onClick={() => setIsOpen(!isOpen)}>
        <GrLanguage className="icon-lng" />
      </BtnLng>
      <ListLng style={{ display: isOpen ? 'block' : 'none' }}>
        {languages.map(lng => (
          <ItemLng key={nanoid()}>{lng.code}</ItemLng>
        ))}
      </ListLng>
    </WrapLng>
  );
}

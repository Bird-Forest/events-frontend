import React, { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { BtnLng, ItemLng, ListLng, WrapLng } from './Filter.styled';
// import { nanoid } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { nanoid } from '@reduxjs/toolkit';

export default function Leanguage() {
  const [isOpen, setIsOpen] = useState();
  const { i18n } = useTranslation();
  // console.log(i18n);

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'uk', name: 'UA' },
  ];

  const changeLng = code => {
    i18n.changeLanguage(code);
  };

  return (
    <WrapLng>
      <BtnLng onClick={() => setIsOpen(!isOpen)}>
        <GrLanguage className="icon-lng" />
      </BtnLng>
      <ListLng style={{ display: isOpen ? 'block' : 'none' }}>
        {languages.map(lng => (
          <ItemLng key={nanoid()} onClick={() => changeLng(lng.code)}>
            {lng.name}
          </ItemLng>
        ))}
        {/* {Object.keys(languages).map(lng => (
          <ItemLng
            key={lng}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {languages[lng].title}
          </ItemLng>
        ))} */}
      </ListLng>
    </WrapLng>
  );
}

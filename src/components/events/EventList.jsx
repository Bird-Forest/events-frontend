import React from 'react';
import { nanoid } from 'nanoid';
import events from '../../data/events.json';
import Event from './Event';
import { ListWrap } from './Event.styled';

export default function EventList() {
  return (
    <ListWrap>
      {events.map(item => (
        <Event key={nanoid()} item={item} />
      ))}
    </ListWrap>
  );
}

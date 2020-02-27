import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentTitle,
  ContentSubtitle,
  ContentContainer,
} from './menu-item.styles';

export const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      imageUrl={imageUrl}
      className="background-image"
    />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);

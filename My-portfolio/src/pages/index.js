import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import client from '../client';
import { Layout, Hero, About, Jobs, Featured, Contact } from '@components';


const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => {
  const [userInfo, setUserInfo] = useState([]);

  const getCarouselSlieds = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: 'portfolio' });
      if (response) {
        setUserInfo(response.items[0].fields);
        console.log(userInfo);
      }
      else {
        console.log("No response")
      }

    } catch (error) {
      console.log(error);
    }
  }, []);


  useEffect(() => (
    getCarouselSlieds()
  ), [] )
  return (
    <Layout location={location} userInfo={userInfo}>
      <StyledMainContainer className="fillHeight">
        <Hero userInfo={userInfo} />
        <About userInfo={userInfo}/>
        <Jobs userInfo={userInfo}/>
        <Featured userInfo={userInfo}/>
        {/* <Projects userInfo={userInfo}/> */}
        <Contact userInfo={userInfo}/>
      </StyledMainContainer>
    </Layout>
  )
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;

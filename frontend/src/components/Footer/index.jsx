import React, { useState } from 'react'
import { FooterContactLinks, FooterContactLinksWrap, FooterContactTitle, FooterContainer, FooterImg, FooterLinks, FooterLinksWrap, FooterSocialHeading, FooterSocialHeadingWrap, FooterSocialWrap, FooterWrap, RecentNewsWrap, SocialIcons, SocialIconsContainer } from '../../styles/Footer'
import useFetch from '../../hooks/useFetch'

const Footer = ({footer}) => {

    
    const url = "http://localhost:1337/api/footer?populate=deep,10"
    const {data, loading, error} = useFetch(url)
    
    if(loading) return <div>Loading....</div>
    if(error) return <div>{error}</div>
    const baseURL = "http://localhost:1337"
    
    const footerLinksLHS = data["attributes"]["footer"].slice(1,3)
    const footerLinksRHS = data["attributes"]["footer"][3]
    

  return (
    <FooterContainer id="contactus">
      <FooterWrap>
        <FooterSocialWrap>
          <FooterImg
            src={`${baseURL}${data["attributes"]["Logo"]["data"][0]["attributes"]["url"]}`}
          />

          <FooterSocialHeadingWrap>
            <FooterSocialHeading>
              {data["attributes"]["footer"][0]["Heading"]}
            </FooterSocialHeading>

            <SocialIconsContainer>
              {data["attributes"]["footer"][0]["socialIcons"].map((icons) => (
                <SocialIcons
                  src={`${baseURL}${icons["icons"]["data"][0]["attributes"]["url"]}`}
                />
              ))}
            </SocialIconsContainer>
          </FooterSocialHeadingWrap>
        </FooterSocialWrap>
        <FooterLinksWrap>
          <FooterContactLinksWrap>
            {footerLinksLHS.map((links) => (
              <FooterContactLinks>
                <FooterContactTitle>{links.Heading}</FooterContactTitle>
                <FooterLinks>
                  {links.aboutLinks.map((link) => (
                    <p>{link.links}</p>
                  ))}
                </FooterLinks>
              </FooterContactLinks>
            ))}
          </FooterContactLinksWrap>
          <FooterContactLinks>
            <FooterContactTitle>{footerLinksRHS.Heading}</FooterContactTitle>
            {footerLinksRHS.news.map((links) => (
              <RecentNewsWrap>
                <img src={`${baseURL}${links.image.data[0].attributes.url}`} />
                <div>
                  <p>{links.date}</p>
                  <p>{links.categoryName}</p>
                </div>
              </RecentNewsWrap>
            ))}
          </FooterContactLinks>
        </FooterLinksWrap>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer
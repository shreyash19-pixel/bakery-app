import styled from "styled-components";
import FooterBg from "../../assests/footer-bg.svg";

export const FooterContainer = styled.div`
  width: 100%;
  background: url(${FooterBg});
  min-height: 550px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  padding-inline: 12px;
`;

export const FooterWrap = styled.div`
  width: 100%;
  max-width: 1118px;
  display: flex;
  flex-direction: column;
`;

export const FooterSocialWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E9BD8D;
  padding-block: 40px;
  align-items: center;
`;

export const FooterImg = styled.img``;

export const FooterSocialHeadingWrap = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
`;

export const FooterSocialHeading = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 29.05px;
  text-align: left;
  color: #E9BD8D;

`;

export const SocialIconsContainer = styled.div`
    display: flex;
    gap: 20px;
`;
export const SocialIcons = styled.img`
    width: 42px;
`;

export const FooterLinksWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding-top: 50px;
`

export const FooterContactLinksWrap = styled.div`
  display: flex;
  gap: 70px;
`

export const FooterContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`

export const FooterContactTitle = styled.h3`
  color: #E9BD8D;
  font-size: 36px;
`

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p{
    color: white;
    font-size: 24px;
  }
`
export const RecentNewsWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  img{
    width: 100px;
    border-radius: 4px;
  }

  div{
    display: flex;
    flex-direction: column;
    gap: 4px;

    p:first-child{
      color: #E9BD8C;
      font-size: 18px;
    }

    p:last-child{
      color: white;
      font-size: 24px;
    }
  }
`


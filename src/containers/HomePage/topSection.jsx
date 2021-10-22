import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import Fade from "react-reveal/Fade";

import TheBestSpecialistsImg from "../../images/home shoes.png";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 870px;
  background: no-repeat;

  background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c346e8;
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
  }
`;

const StandoutImage = styled.div`
  width: 55em;
  height: 44em;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 22em;
    height: 18em;
  }
  img {
    width: 114%;
    height: 137%;
  }
  transition: transform 0.2s;
  cursor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48aW1hZ2UgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FZQUFBQ00vcmh0QUFBQUFYTlNSMElBcnM0YzZRQUFCSzlKUkVGVVdFZnRtRzFJcTNVWXhxOGRtN09hYzVSRkZ2bkc4R1VpWm9rWVV5ZUk2QmNSTmN3WitJYUlmaER6QlVxRldhR0I2Qkhkam9wS21uRFluRmtXZmpnb2dhQ2VvVzV4RGdkSGFpbHI0aktucnRwMGJSNDk4Ui9QVGg3YjVzdWN4dy8rNFdIczJiTm52MTNYZmQzM2Y2UGhtaS9hTmVmRERhQ3JEdGxUa0p5em5YOENnQnpQYlowRUpNL3Back81UjYxV0Q0YUdoaW9CSEFBNGZGNkVKd0U5QUx5a1Vxays0bks1UFZ0Ylc5MERBd090ZFhWMXYxT2dSMWNOYWcvUXU3bTUrYjM2K3ZvZkNZekpaUHBWcTlWMmNqaWNyd0dZQVR5K1N0dFBBdDRDd0FMd3BrNm51MTlkWGMwdUxTMDF4OGZITS9SNi9iM0Z4Y1hiaVltSmNnQ1dxN0xkWGtpOENhQktwZnBtWW1JaXNycTZHc1hGeFJDTHhZY01CdU14c2IybXBxWkZLcFhxS2R2ZEdpSjdnQzhDOEZ0WVdQakNaRExsOHZsOFVwZWcwK2tRaVVRb0t5dkQvdjYrU3FQUmRJYUhoMHNCL0VQWjdwYnl0QWZvQ2VEMWtaR1I0clMwTkNHYnpmWTRPdm92R3p3ZUQxMWRYZWFvcUNqRzd1N3VkMHFsOG5acWF1b0RxajR2UFVUMkFGOEE4RXBGUlVXOFNDVDZOalkyRmdxRjRuL3FWRlZWb2IyOUhRY0hCNGJOemMwNy92NytMU1JUbDIyN28wYk5CdUN2MCttbUd4b2FXSDE5ZlhidDgvSHhRWGQzOTVPOHZEeWEwV2o4U2ExV2QwUkdSbzRkUzd2THRqdWF4U1FvYnkwdExRMVBUVTFGbFplWE8vMmdsSlFVOVBiMldvS0NnankzdDdlbGNybThOU01qNDJjcTdTN1o3Z2lRQk9VTmhVTHhKWTFHeTQ2SmlhR2ZSWXFHaGdZME5UVVIyN2UwV3UyZHdNREFUaXBFWkJwZEtPMk9BSzFCa2Nsa1JabVptWjh4bWN4YkZndHBmYWN2UHo4L291WmhlbnE2aDlGb3ZMK3hzU0VLQ3d2N2dWTHozSkNPQUsxQktTa3BlYisvdi85N2tseTVuUFJueDR2TDVTSWhJUUZ4Y1hGSGlZbUpCOEhCd1l6MTlYVzF4V0tacE5QcDR3RUJBZmN1MHR3ZEFaTHoxcURvOWZwcG9WRElFb3ZGejlBbEpTVWhLQ2dJeWNuSjRQRjRoNEdCZ1I0N096dDdhMnRydjZ5dXJpb21KeWNYQmdjSEh3SFFBU0JOZlk5SytPazJITHZDMlliVkdwVFYxVlhwek16TU80V0ZoYy9jdUtPakE1V1ZsVmhlWHRhbzFlcUhjM056ajFwYVdoNllUQ1lEQldNRThEY0E4a2pnTGpRZW5RRmFnekkvUDkvTVpESS9pSWlJZUJxVTdPeHNqSTZPWW5oNCtLNUFJQmdGOE5jeEVOSUx5WFFoUU9RZ0FTRWJESkxtUzZ0Qm9oWUp5bXNTaWFSUUlCQTBNWmxNN08zdHdjdkxDMHFsOHREVDAvTmhTRWpJcHdEK0FQQW4xYVNQQTVFOXBFc3Roa0E0VTVETTRGZno4L05qaDRhR3h2bDhQcWFucDlIVDA0T0NnZ0p6VVZGUnFVd21XNkJxak5oNFlaV2NGYVV6UUZ0UTNqWVlERE9Oalkyc2xaVVZqSStQUXlhVGlYTnpjNzhDc0VHcFIrRGNzazc3VldmZGVtazBtcnV6czdQdmtybHNNQmprMGRIUm53RDREY0FPVlc5dWdUdk5Zdks2TFNpZisvcjZmc2hpc1N5VmxaVmxFb2xrbnFvOWtrNlg2K3lpRmo4Tmlrd21FK1RrNUxTT2pZMjFaMlZsRFZIV2t1UzZ6Vm9iOUdrV2s2Q3doVUpoVEg1K2ZoMkh3L21ZQ29YYnJUMHJJUGtDTHdQd3JxMnQ5VzlyYTFzSFlHdkViclgycklEa090S2d5VUhtTTdHVTlEcTNXM3NlUU5zL0RlU1JUSUlyVWU0OGdHNXJJV2U1OFdraE9jczkzSHJORGFDcjh0NG9lS09ncXdxNCt2NXJYNFAvQXYxRXZUaGJtdVpYQUFBQUFFbEZUa1N1UW1DQyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+PC9zdmc+)
      4 4,
    auto;
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const SloganText = styled.div`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 800;
  font-size: 55px;
  font-family: Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;
const SloganText2 = styled.div`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 400;
  font-size: 35px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

function TopSection(props) {
  const { children } = props;

  // const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <Marginer direction="vertical" margin={8} />
            <SloganText>SPECIAL EDITION</SloganText>
            <SloganText2>Lorem doloremque, sint</SloganText2>
            <SloganText2> sint repellat. Ipsa </SloganText2>
            <Marginer direction="vertical" margin={15} />
          </LogoContainer>
          <Fade bottom>
            <StandoutImage>
              <img src={TheBestSpecialistsImg} alt="Home shose" />
            </StandoutImage>
          </Fade>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}

export default TopSection;

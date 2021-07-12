import styled from "styled-components";

export const Wrapper = styled.div<{ image: string }>`
  background: ${(props) =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), var(--darkGrey)`};
  background-size: 100%, cover;
  background-position: center;
  /* height: 600px; */
  position: relative;
  animation: animageHeroImage 1s;
  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .statusSection {
    display: flex;
    margin: 70px;
    align-items: center;
    justify-content: center;
    justify-content: flex-end;
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  display: flex;
  .buttonsSection {
    display: flex;
    flex-direction: column;
  }
  .inputsSection {
    display: flex;
    flex-direction: column;
    /* background-color: aliceblue; */
    width:20%
  }
  .dataSection {
    flex:1;
    align-items: center;
    justify-content: center;
  }
  .parametersSection{
    margin: 20px;
  }
`;



export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  /* position: absolute; */
  bottom: 40px;
  margin-right: 20px;
  margin-left: 20px;

  min-height: 100px;
  color: var(--white);
  h1 {
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;


export const StatusSignal = styled.div< { color: string}>`
  height: 30px;
  width: 30px;
  margin-left: 10px;
  background: ${(props) =>
    `${props.color}`};
  border-radius: 30px;
`
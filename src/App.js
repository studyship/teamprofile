import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import HRProfile from "./images/hr.jpeg";
import SMProfile from "./images/sm.jpeg";
import GWProfile from "./images/gw.jpeg";
import HGProfile from "./images/hg.jpeg";
import TSProfile from "./images/ts.jpeg";
import ScrollDownIndicator from "./ScrollDownIndicator";

const Container = styled.div`
  background-color: #262626;
`;
const Team = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  height: 100vh;
  box-sizing: border-box;
`;
const Next = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Contents = styled.div`
  width: 80%;
  margin: 50px auto;
  @media (max-width: 992px) {
    width: 90%;
    margin: 20px auto;
  }
`;
const Row = styled.div`
  position: relative;
  margin-top: ${({ marginTop }) => marginTop && marginTop};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;
const H1 = styled.h1`
  color: #fff;
  text-align: center;
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 48px;
  text-transform: uppercase;
`;
const P = styled.p`
  margin: 20px 0 0;
  color: #fff;
  padding-left: 20px;
  border-left: 5px solid #f00;
  font-size: 18px;
`;
const Column = styled.div`
  margin: 0px 10px;
  position: relative;
  width: calc(20% - 20px);
  min-height: 250px;
  background-color: #fff;
  float: left;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1;
    transition: 0.3s;
    mix-blend-mode: soft-light;
  }
  :hover:before {
    bottom: 0;
  }
  :hover {
    div {
      bottom: 0;
      img {
        transform: scale(1.5);
      }
    }
  }
  @media (max-width: 992px) {
    width: calc(50% - 20px);
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    width: calc(100% - 20px);
    margin-bottom: 20px;
  }
`;
const ImgBox = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  transition: 3s;
`;
const Details = styled.div`
  position: absolute;
  bottom: -85px;
  left: 0;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  transition: 0.3s;
  z-index: 2;
`;
const Name = styled.h3`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  color: #fff;
  font-weight: 500;
  text-align: right;
  text-transform: uppercase;
`;
const Job = styled.span`
  margin: 0;
  padding: 0;
  color: #f00;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  position: relative;
  top: -6px;
`;
const IconWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  float: right;
`;
const IconBox = styled.li`
  list-style: none;
  padding: 0 10px;
  color: #fff;
  transition: 0.5s;
  :hover {
    color: #f00;
    transform: rotateY(360deg);
  }
`;

const App = () => {
  useEffect(() => {
    document.body.style.margin = 0;
    document.body.style.backgroundColor = "#262626";
  }, []);

  const values = [
    {
      isSelected: true,
      comment: "엘론 머스크를 꿈꾸는 디자이너입니다1.",
      title: "Kim su min",
      job: "Designer",
      thumbnail: HRProfile,
    },
    {
      isSelected: false,
      comment: "엘론 머스크를 꿈꾸는 디자이너입니다2.",
      title: "Kim su min",
      job: "Designer",
      thumbnail: SMProfile,
    },
    {
      isSelected: false,
      comment: "엘론 머스크를 꿈꾸는 디자이너입니다3.",
      title: "Kim su min",
      job: "Designer",
      thumbnail: GWProfile,
    },
    {
      isSelected: false,
      comment: "엘론 머스크를 꿈꾸는 디자이너입니다4.",
      title: "Kim su min",
      job: "Designer",
      thumbnail: HGProfile,
    },
    {
      isSelected: false,
      comment: "엘론 머스크를 꿈꾸는 디자이너입니다5.",
      title: "Kim su min",
      job: "Designer",
      thumbnail: TSProfile,
    },
  ];

  const [profileValues, setProfileValues] = useState(values);

  const handleClick = (index) => {
    const updateValues = profileValues.map((item, i) =>
      i !== index
        ? { ...item, isSelected: false }
        : { ...item, isSelected: true }
    );
    setProfileValues(updateValues);
  };

  return (
    <Container>
      <Team>
        <>
          <Contents>
            <Row>
              <H1>Our Team</H1>
              {profileValues.map(
                (value) => value.isSelected && <P>{value.comment}</P>
              )}
            </Row>
            {profileValues.map((value, index) => (
              <Row
                marginTop="50px"
                onClick={() => {
                  handleClick(index);
                }}
              >
                <Column>
                  <ImgBox>
                    <Image src={value.thumbnail}></Image>
                  </ImgBox>
                  <Details>
                    <Name>
                      {value.title}
                      <Job>{value.job}</Job>
                    </Name>
                    <IconWrapper>
                      <IconBox>
                        <FaGithub></FaGithub>
                      </IconBox>
                      <IconBox>
                        <FaGithub></FaGithub>
                      </IconBox>
                      <IconBox>
                        <FaGithub></FaGithub>
                      </IconBox>
                      <IconBox>
                        <FaGithub></FaGithub>
                      </IconBox>
                    </IconWrapper>
                  </Details>
                </Column>
              </Row>
            ))}
          </Contents>
        </>
        <Next>
          <Link
            activeClass="active"
            className="test1"
            to="test2"
            spy={true}
            smooth={true}
            duration={500}
          >
            <ScrollDownIndicator></ScrollDownIndicator>
          </Link>
        </Next>
      </Team>
      <Team>
        <Link
          activeClass="active"
          className="test2"
          to="test3"
          spy={true}
          smooth={true}
          duration={500}
        ></Link>
      </Team>
    </Container>
  );
};

export default App;

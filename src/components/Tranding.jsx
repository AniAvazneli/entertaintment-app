import styled from "styled-components";
import UnMarked from "../assets/UnBook.png";
import Marked from "../assets/Booked.png";
import Movie from "../assets/Movie.png";
import Serie from "../assets/Serie.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Trending = ({ data }) => {
  const tranding = data.filter((series) => series.isTrending === true);
  return (
    <TrandingDiv>
      <h2>Trending</h2>
      <Splide
        options={{
          fixedWidth: 190,
          autoplay: true,
          perMove: 1,
          interval: 2000,
          pagination: false,
          arrows: false,
          direction: "ltr",
          pauseOnFocus: true,
          pauseOnHover: true,
          start: 2,
          gap: 70,
          breakpoints: {
            1920: {
              fixedWidth: 600,
              gap: 60,
            },
            1440: {
              fixedWidth: 470,
              gap: 40,
            },
            768: {
              fixedWidth: 470,
              gap: 40,
            },
            500: {
              fixedWidth: 210,
              gap: 20,
            },
          },
        }}
      >
        {tranding.map((movie) => {
          return (
            <SplideSlide key={movie.title}>
              <TrendingMovies >
              <ForMark>
                <ImgD
                  src={process.env.PUBLIC_URL + movie.thumbnail.regular.small}
                  alt=""
                />
                <BookM src={movie.isBookmarked ? Marked : UnMarked} alt="" />
              </ForMark>
              <MainInfo>
                <Headings>{movie.year}</Headings>
                <Headings>.</Headings>
                <CoinImage
                  src={movie.category === "TV Series" ? Serie : Movie}
                  alt=""
                />
                <Headings>{movie.category}</Headings>
                <Headings>.</Headings>
                <Headings>{movie.rating}</Headings>
              </MainInfo>
              <Title>{movie.title}</Title>
              </TrendingMovies>
            </SplideSlide>
          );
        })}
      </Splide>
    </TrandingDiv>
  );
};

export default Trending;

const TrandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 16px;
  
  h2 {
    color: white;
  }
  @media screen and (min-width: 1440px) {
    width: 90vw;
  }
`;

const TrendingMovies = styled.div`
  display: flex;
  flex-direction: row;
 @media screen and (min-width: 768px) {
    min-width: 470px;
  }
`;

const ImgD = styled.img`
  width: 240px;
  height: 140px;
  margin: auto;
  border-radius: 8px;
`;

const BookM = styled.img`
  display: flex;
  transform: translate(621%, -418%);
`;

const ForMark = styled.div`
  /* margin-left: 16px;
  margin-right: 16px; */
`;

const MainInfo = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  display: flex;
  align-items: center;
  display: flex;
  margin-bottom: 4px;
  position: absolute;
  transform: translate(22%, 550%);
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  position: absolute;
  transform: translate(32%, 550%);
`;
const Headings = styled.h3`
  font-weight: 300;
  font-size: 11px;
  line-height: 14px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-right: 6px;
`;

const CoinImage = styled.img`
  margin-right: 4px;
`;

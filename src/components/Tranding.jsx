import styled from "styled-components";
import UnMarked from "../assets/UnBook.png";
import Marked from "../assets/Booked.png";
import Movie from "../assets/Movie.png";
import Serie from "../assets/Serie.png";

const Trending = ({ data }) => {
  const tranding = data.filter((series) => series.isTrending === true);
  return (
    <TrandingDiv>
      {tranding.map((movie) => {
        return (
          <Maincube key={movie.title}>
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
          </Maincube>
        );
      })}
    </TrandingDiv>
  );
};

export default Trending;

const TrandingDiv = styled.div`
  display: flex;
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

const Maincube = styled.div`
  display: flex;
  flex-direction: column;
`;

const ForMark = styled.div`
  margin-left: 16px;
  margin-right: 16px;
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

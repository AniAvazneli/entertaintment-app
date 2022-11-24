import styled from "styled-components";
import UnMarked from "../assets/UnBook.png";
import Marked from "../assets/Booked.png";
import Movie from "../assets/Movie.png";
import Serie from "../assets/Serie.png";

const Home = ({ data }) => {
  return (
    <Grid>
      {data.map((movie) => {
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
    </Grid>
  );
};

export default Home;

const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
  gap: 15px;
`;
const ImgD = styled.img`
  width: 164px;
  height: 110px;
  margin: auto;
  border-radius: 8px;
`;

const BookM = styled.img`
  display: flex;
  /* transform: translate(370%, -325%); */
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Maincube = styled.div`
  display: flex;
  flex-direction: column;
`;

const ForMark = styled.div`
  position: relative;
`;

const MainInfo = styled.div`
  font-weight: 300;
  font-size: 11px;
  line-height: 14px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  display: flex;
  align-items: center;
  display: flex;
  margin-bottom: 4px;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
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

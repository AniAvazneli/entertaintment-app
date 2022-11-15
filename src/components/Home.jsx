import styled from "styled-components";
import UnMarked from "../assets/UnBook.png";
import Marked from "../assets/Booked.png";
import Movie from "../assets/Movie.png";
import Serie from "../assets/Serie.png";

const Home = ({ data }) => {
  return (
    <Grid>
      {data.map((movie) => {
        console.log(movie);
        return (
          <Maincube>
            <ForMark>
              <ImgD src={movie.thumbnail.regular.small} alt="" />
              <BookMarks>
                <BookM src={movie.isBookmarked ? Marked : UnMarked} alt="" />
              </BookMarks>
            </ForMark>
            <MainInfo>
              <h3>{movie.year}</h3>
              <h3>.</h3>
              <img
                src={movie.category === "TV Series" ? Serie : Movie}
                alt=""
              />
              <h3>{movie.category}</h3>
              <h3>.</h3>
              <h3>{movie.rating}</h3>
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

const BookMarks = styled.div``;
const BookM = styled.img``;

const Maincube = styled.div`
  display: flex;
  flex-direction: column;
`;

const ForMark = styled.div``;

const MainInfo = styled.div`
  font-weight: 300;
  font-size: 11px;
  line-height: 14px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
`;

import styled from "styled-components";
import UnMarked from "../assets/UnBook.png";
import Marked from "../assets/Booked.png";
import Movie from "../assets/Movie.png";
import Serie from "../assets/Serie.png";


const Movies = ({data, searchTerm})=>{
    const onlyMovies = data.filter((series) => series.category === "Movie");
    const filtered = onlyMovies.filter((series) => series.title.toLowerCase().startsWith(searchTerm.toLowerCase()));
return (
    <Grid>
      {filtered.map((movie) => {
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
)
}
export default Movies;

const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
  gap: 15px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto auto;
    gap: 17px;
    padding-bottom: 56px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: auto auto auto auto;
    gap: 40px;
    margin-bottom: 0px;
  }
`;
const ImgD = styled.img`
  width: 164px;
  height: 110px;
  margin: auto;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 140px;
  }
  @media screen and (min-width: 1440px) {
    height: 174px;
    width: 280px;
  }
`;

const BookM = styled.img`
  display: flex;
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Maincube = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
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
  @media screen and (min-width: 1440px) {
    margin-top: 8px;
  }
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  @media screen and (min-width: 1440px) {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
  }
`;
const Headings = styled.h3`
  font-weight: 300;
  font-size: 11px;
  line-height: 14px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-right: 6px;
  @media screen and (min-width: 1440px) {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
  }
`;

const CoinImage = styled.img`
  margin-right: 4px;
`;
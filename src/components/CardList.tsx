import { useEffect, useState } from "react";
import { useRequest } from "alova";
import listGetter from "../alova/listGetter";
import MovieCard from "./MovieCard";
import { Row, Col } from "antd";
import { Movie } from "./MovieCard";

function CardList() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const { data } = useRequest(listGetter, { initialData: [] });
  useEffect(() => {
    console.log(data);

    setMovieList(data);
  }, [data]);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {movieList.map((item) => (
          <Col key={item.id}>
            <div>
              <MovieCard item={item} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardList;
//import { css } from "@emotion/react";

// const cardGrid = css`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//   grid-gap: 20px;
// `;

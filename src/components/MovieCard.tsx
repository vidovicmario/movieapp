import React from "react";
import { Card, Space } from "antd";
import { MdBookmarkBorder, MdStarBorder } from "react-icons/md";

//import MovieCard from './MovieCard';

const { Meta } = Card;

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface MovieCardProps {
  item: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ item }) => (
  <Card style={{ width: "100%" }} cover={<img alt="example" src={item.poster_path} />}>
    <Meta
      title={item.title}
      description={
        <Space size="large">
          <span style={{ color: "black" }}>Rating: {item.vote_average}</span>
          <MdStarBorder size={25} color="black" />
          <MdBookmarkBorder size={25} color="black" />
        </Space>
      }
    />
  </Card>
);

export default MovieCard;

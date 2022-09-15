import { useEffect, useState } from "react";
import { Article } from "../interfaces/Article";
import { Row, Col, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";

const CardList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchCard();
  }, []);

  const fetchCard = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticles(data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
        <Row md={3} className="g-4 my-3">
      {articles.map((article,i) => (
        <Col key={i}>
          <SingleCard article={article}/>
        </Col>
      ))}
    </Row>
    </Container>
    
  );
};

export default CardList;

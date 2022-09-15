import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../interfaces/Article";

const Details = () => {
  const [article, setArticle] = useState<null | Article>(null);
  let { id } = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async () => {
    try {
      console.log(id);
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + id
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticle(data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="my-5" style={{height: "100vh"}}>
      {article && (
        <Container style={{backgroundColor: "rgba(255, 255, 255, 0.375)"}}>
          <Row >
            <Col>
              <img className="mt-3" src={article.imageUrl} width="50%" alt="immagine" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <p>Risorsa esterna : <a href={article.url}>{article.url}</a></p>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default Details;

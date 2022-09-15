import { Card, Button } from "react-bootstrap";
import { Article } from "../interfaces/Article";
import { useNavigate } from "react-router-dom";

interface SingleCardProps {
  article: Article;
}

const SingleCard = ({ article }: SingleCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100" style={{ width: "18rem", backgroundColor: "rgba(255, 255, 255, 0.375)" }}>
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>{" "}
      </Card.Body>
      <div className="d-flex justify-content-end flex-column">
        <Card.Text>Pubblicato il : {article.publishedAt.toString()}</Card.Text>
        <Card.Subtitle>Fonte : {article.newsSite}</Card.Subtitle>
      </div>

      <Card.Footer className="mt-2">
        <Button variant="dark" onClick={() => navigate("/details/"+article.id)}>
          Details
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default SingleCard;

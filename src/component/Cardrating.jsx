import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Resultcard from "./Resultcard";

const Cardrating = () => {
  const [rating, setRating] = useState(0);
  const [link, setLink] = useState(false);

  const checkRating = (e) => {
    e.preventDefault();
    rating && setLink(true);
  };

  useEffect(() => {
    console.log(link);
  }, [link]);

  return (
    <div className="main">
      <Card className="px-custom py-5">
        <Card.Body>
          {link ? (
            <Resultcard rating={rating} />
          ) : (
            <div>
              <Card.Title>
                <div className="icon">
                  <i>
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                        fill="#FC7614"
                      />
                    </svg>
                  </i>
                </div>
              </Card.Title>
              <h3 className="text-white fs-4 fw-bold mt-5">How did we do?</h3>
              <Card.Text className="text-paragrap mt-3">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our osfering!{" "}
              </Card.Text>
              <div className="list-group">
                <ul className="d-flex gap-3 mt-3 space-b">
                  <li
                    className={`rating` + (rating === 1 ? ` active` : "")}
                    onClick={() => {
                      setRating(1);
                    }}
                  >
                    1
                  </li>
                  <li
                    className={`rating` + (rating === 2 ? ` active` : "")}
                    onClick={() => {
                      setRating(2);
                    }}
                  >
                    2
                  </li>
                  <li
                    className={`rating` + (rating === 3 ? ` active` : "")}
                    onClick={() => {
                      setRating(3);
                    }}
                  >
                    3
                  </li>
                  <li
                    className={`rating` + (rating === 4 ? ` active` : "")}
                    onClick={() => {
                      setRating(4);
                    }}
                  >
                    4
                  </li>
                  <li
                    className={`rating` + (rating === 5 ? ` active` : "")}
                    onClick={() => {
                      setRating(5);
                    }}
                  >
                    5
                  </li>
                </ul>
              </div>
              <Button
                variant="light"
                className="mt-3 fw-bold"
                onClick={checkRating}
              >
                submit
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardrating;

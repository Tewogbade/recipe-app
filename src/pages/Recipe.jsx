import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h3>{details.title}</h3>
        <img src={details.image} alt={details.title} />
      </div>

      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredients) => (
              <li>{ingredients.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin: 5rem auto;
  margin-top: 6rem;
  margin-bottom: 5rem;
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 1200px) {
    display: block;
  }

  img {
    border-radius: 2rem;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .active {
    background: linear-gradient(to right, #f27121, #e94057);
    color: #273248;
  }

  h3 {
    margin-top: 0;
  }

  li {
    font-size: 1rem;
    line-height: 2.5rem;
    margin-left: 1rem;
  }

  ul {
    margin-top: 2rem;
  }

  p {
    font-size: 1rem;
    text-decoration: none;
    margin-top: 2rem;
    text-align: justify;
  }

  a {
    text-decoration: none;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: white;
  background: #273248;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

const Info = styled.div`
  margin-left: 5rem;
  width: 60%;
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }

  section {
    button {
      border-radius: 0.5rem;
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
    }
  }
`;
export default Recipe;

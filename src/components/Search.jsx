import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submittHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submittHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          action="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  /* margin: 0 20rem; */

  div {
    position: relative;
    width: 60%;
    min-width: 20rem;
    margin: auto;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    color: white;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
  }
`;

export default Search;

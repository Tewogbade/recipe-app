import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background-color: #273248;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  @media (max-width: 768px) {
    margin-right: 0.7rem;
    width: 4.8rem;
    height: 4.8rem;
    min-width: 4.8rem;
    min-height: 4.8rem;
  }

  h4 {
    margin-top: 5px;
    color: #ffa364;
    font-size: 0.8rem;
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }

  svg {
    color: #ffa364;
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    h4 {
      color: #273248;
    }

    svg {
      color: #273248;
    }
  }
`;

export default Category;

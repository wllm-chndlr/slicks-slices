import React from "react";
import { graphql } from 'gatsby';
import PizzaList from "../components/PizzaList";
import ToppingsFilter from "../components/ToppingsFilter";

export default function PizzasPage({ data }) {
    const pizzas = data.pizzas.nodes;

	return (
        <>
            <ToppingsFilter />
            <PizzaList pizzas={pizzas}/>
        </>
    )
}

export const query = graphql`
    query PizzaQuery {
        pizzas: allSanityPizza {
            nodes {
                name
                id
                slug {
                    current
                }
                toppings {
                    id
                    name
                }
                image {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                        fixed(width: 200, height: 200) {
                            ...GatsbySanityImageFixed
                        }
                    }
                }
            }
        }
    }
`;

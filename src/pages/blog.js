import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul className="grid grid-cols-2 gap-4">
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <GatsbyImage
              image={getImage(
                node.frontmatter?.image?.childImageSharp?.gatsbyImageData
              )}
            />
            <p>description: {node.frontmatter.description}</p>
            <p>Category: {node.frontmatter.category}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          category
          description
          image {
            childImageSharp {
              gatsbyImageData(width: 256, height: 256)
            }
          }
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

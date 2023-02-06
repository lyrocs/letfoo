import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Script } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./articles.scss";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
      <GatsbyImage
        image={getImage(
          data.mdx.frontmatter?.image?.childImageSharp?.gatsbyImageData
        )}
      />
      {/* <Img fixed={data.image.childImageSharp.fixed} /> */}
      <Script src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(width: 1024, height: 1024)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

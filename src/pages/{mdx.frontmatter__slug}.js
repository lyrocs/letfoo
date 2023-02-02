import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Script } from "gatsby";
import Img from "gatsby-image";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
      <Img fixed={data.image.childImageSharp.fixed} />
      <Script src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx: mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
    image: file(relativePath: { eq: "cloud.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 512, height: 512) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

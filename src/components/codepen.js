import * as React from "react";

const Codepen = ({ hash }) => {
  return (
    <>
      <span>COOOUCOU {hash}</span>
      <p
        class="codepen"
        data-height="300"
        data-default-tab="html,result"
        data-slug-hash={hash}
        data-user="lyrocs"
      >
        <span>
          See the Pen{" "}
          <a href="https://codepen.io/lyrocs/pen/{{hash}}">Untitled</a> by
          lyrocs (<a href="https://codepen.io/lyrocs">@lyrocs</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </span>
      </p>
    </>
  );
};

export default Codepen;

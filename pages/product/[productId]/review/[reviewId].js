import React from "react";
import { useRouter } from "next/router";
import ReactGA from "react-ga";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  const handleClick = () => {
    // ReactGA.event({
    //   category: "Button",
    //   action: "Click the button from the Review page",
    // });
    // alert(
    //   "send the information to google analytics that the user touched the click button"
    // );
    // ReactGA.event({ category, action, label });
  };
  return (
    <div>
      <h1>
        Review Id: {reviewId} for Product: {productId}{" "}
      </h1>
      <button onClick={handleClick}>Review Page</button>
    </div>
  );
}

export default Review;

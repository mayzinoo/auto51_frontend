import React from "react";
import Gridcard from "./Gridcard";

import { img_url } from "../../../Api/api";
import NoImage from "../../../assets/images/no-image.jpg";

function ViewGridLayout(props) {
  const { currentPosts } = props;
  for (var i = 0; i < currentPosts.length; i++) {
    if (currentPosts[i].price_status === "leasing") {
      currentPosts[i].price = currentPosts[i].rental_price;
      currentPosts[i].pricing_status = "For Leasing";
    } else if (currentPosts[i].price_status === "selling") {
      currentPosts[i].price = currentPosts[i].selling_price;
      currentPosts[i].pricing_status = "For Selling";
    }
    if (currentPosts[i].title_status === "1") {
      currentPosts[i].title_status = "Popular";
    } else if (currentPosts[i].title_status === "2") {
      currentPosts[i].title_status = "Offers";
    } else if (currentPosts[i].title_status === "3") {
      currentPosts[i].title_status = "Brand New";
    } else if (currentPosts[i].title_status === "4") {
      currentPosts[i].title_status = "Electirc";
    } else if (currentPosts[i].title_status === "5") {
      currentPosts[i].title_status = "A";
    } else if (currentPosts[i].title_status === "6") {
      currentPosts[i].title_status = "B";
    } else if (currentPosts[i].title_status === "7") {
      currentPosts[i].title_status = "C";
    }

  }

  return (
    <div className="row">
      {currentPosts.map((post) => {
        return (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={post.id}>
            {post.photo === "" ? (
              <Gridcard
                src={NoImage}
                href={`/vehicles/details/${post.id}`}
                hrefValue={post.brand_name}
                titleStatus={post.title_status}
                pricingStatus={post.pricing_status}
                pValue={post.model_name}
                spanRegistration={post.year}
                spanDoor={post.door}
                spanSeat={post.seat_qty}
                spanPcdprice={post.price}
              />
            ) : (
              <Gridcard
                src={img_url + post.photo}
                href={`/vehicles/details/${post.id}`}
                hrefValue={post.brand_name}
                titleStatus={post.title_status}
                pricingStatus={post.pricing_status}
                pValue={post.model_name}
                spanRegistration={post.year}
                spanDoor={post.door}
                spanSeat={post.seat_qty}
                spanPcdprice={post.price}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ViewGridLayout;

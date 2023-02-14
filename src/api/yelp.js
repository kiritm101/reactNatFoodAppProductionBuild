import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer J2zxrhdLk1Mhq2EbpmhpZDzT7yVJ1VjDpicXpta-sGJepiAYKrAFgkUht8OfVOTRpXxVJ-1agdlRZOtw45pfHFJUAtrYstlTEd_dTBed04aBTqdVyivdLnQzZCS_Y3Yx`,
  },
});

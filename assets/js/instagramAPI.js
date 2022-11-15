const token =
  "?";

const spanFollow = document.querySelector(".spanFollow");
const spanCountPost = document.querySelector(".spanCountPost");
const spanInsight = document.querySelector(".spanInsight");

const getInstagramFollow = async () => {
  const getData = await axios.get(
    `https://graph.facebook.com/v15.0/17841402314759968?fields=id%2Cname%2Cusername%2Cmedia_count%2Cfollows_count%2Cfollowers_count&access_token=${token}`
  );
  const insta = getData.data;
  spanFollow.innerHTML = insta.followers_count;
  spanCountPost.innerHTML = insta.media_count;
};
const getInstagramInsights = async () => {
  const getData = await axios.get(
    `https://graph.facebook.com/v15.0/17841402314759968/insights?metric=reach&period=days_28&access_token=${token}`
  );
  const insta = getData.data.data[0].values[0];
  spanInsight.innerHTML = insta.value;
};

getInstagramFollow();
getInstagramInsights();

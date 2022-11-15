const APIkey = "?";
const youtubeID = "UCqcrZPdAU0NOdqJu4OAyt9A";

const spanSubscribe = document.querySelector(".spanSubscribe");
const spanViewCount = document.querySelector(".spanViewCount");
const spanVideoCount = document.querySelector(".spanVideoCount");

const getYoutubeSubscribe = async () => {
  const getData = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeID}&key=${APIkey}`
  );
  const yt = getData.data.items[0].statistics;
  spanSubscribe.innerHTML = yt.subscriberCount;
  spanViewCount.innerHTML = yt.videoCount;
  spanVideoCount.innerHTML = yt.viewCount;
};

getYoutubeSubscribe();


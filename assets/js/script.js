setTimeout(function CountTotalFollowers() {
  const totalFollowers = document.querySelector(".totalFollowers");
  const spanFollow = parseInt(document.querySelector(".spanFollow").innerHTML)
  const spanSubscribe = parseInt(document.querySelector(".spanSubscribe").innerHTML)
  const spanFollowFacebook = parseInt(document.querySelector(".spanFollowFacebook").innerHTML)

  const total =  spanSubscribe+spanFollowFacebook+spanFollow
  totalFollowers.innerHTML = total;

}, 4000);
CountTotalFollowers();

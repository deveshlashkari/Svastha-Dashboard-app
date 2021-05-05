exports.randomBackgroundGenerator = () => {
  var colors = [
    {
      background:
        "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(175,255,179,1) 100%)",
      color: "#289672",
    },
    {
      background:
        "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(250,180,205,1) 100%)",
      color: "#BE255D",
    },
    {
      background:
        "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(250,246,180,1) 100%)",
      color: "#FF8F00",
    },
    {
      background:
        "linear-gradient(90deg, rgba(240,244,240,1) 8%, rgba(240,180,250,1) 100%)",
      color: "#536162",
    },
  ];
  const random = Math.floor(Math.random() * colors.length);
  console.log(colors[random]);
  return colors[random];
};

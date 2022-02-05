const channels = [
  {
    name: "Putin FM",
    freq: 66.6,
  },
  {
    name: "Dribble FM",
    freq: 101.2,
  },
  {
    name: "Doge FM",
    freq: 99.4,
  },
  {
    name: "Ballads FM",
    freq: 87.1,
  },
  {
    name: "Maximum FM",
    freq: 142.2,
  },
];

export function getChannels() {
  return channels;
}

export function getChannel(freq) {
  return channels.find((channel) => channel.freq === freq);
}

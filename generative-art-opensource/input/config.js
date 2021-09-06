const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description =
  "The Nerdy Coder Clones, eats, breaths, and dreams code, maybe because they were created by code. Only 1000 of these coders exist and was created by HashLips.";
const baseImageUri = "https://nerdycoderclones.online/metedata";
const startEditionFrom = 1;
const endEditionAt = 1000;
const editionSize = 1000;
const raceWeights = [
  {
    value: "nerd",
    from: 1,
    to: editionSize,
  },
];

const races = {
  nerd: {
    name: "Nerd",
    layers: [
      {
        name: "Body",
        elements: [
          {
            id: 0,
            name: "Nerd",
            path: `${dir}/body/nerd.png`,
            weight: 100, //100%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Clothing",
        elements: [
          {
            id: 0,
            name: "White v-neck",
            path: `${dir}/clothing/white v-neck.png`,
            weight: 100, //50%
          },
          {
            id: 1,
            name: "Purple shirt",
            path: `${dir}/clothing/purple shirt.png`,
            weight: 50, //20%
          },
          {
            id: 2,
            name: "Yellow t-shirt",
            path: `${dir}/clothing/yellow t-shirt.png`,
            weight: 30, //15%
          },
          {
            id: 3,
            name: "Hoodie",
            path: `${dir}/clothing/hoodie.png`,
            weight: 15, //8%
          },
          {
            id: 4,
            name: "Vampire cloak",
            path: `${dir}/clothing/vampire cloak.png`,
            weight: 7, //4%
          },
          {
            id: 5,
            name: "Zombie shirt",
            path: `${dir}/clothing/zombie shirt.png`,
            weight: 3, //2%
          },
          {
            id: 6,
            name: "Alien suit",
            path: `${dir}/clothing/alien suit.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Clothing logo",
        elements: [
          {
            id: 0,
            name: "None",
            path: `${dir}/clothing logo/none.png`,
            weight: 100, //25%
          },
          {
            id: 1,
            name: "Coder",
            path: `${dir}/clothing logo/coder.png`,
            weight: 75, //25%
          },
          {
            id: 2,
            name: "Red circle",
            path: `${dir}/clothing logo/red circle.png`,
            weight: 50, //20%
          },
          {
            id: 3,
            name: "Loading",
            path: `${dir}/clothing logo/loading.png`,
            weight: 30, //15%
          },
          {
            id: 4,
            name: "Eye",
            path: `${dir}/clothing logo/eye.png`,
            weight: 15, //8%
          },
          {
            id: 5,
            name: "HTML",
            path: `${dir}/clothing logo/html.png`,
            weight: 7, //4%
          },
          {
            id: 6,
            name: "Zombie",
            path: `${dir}/clothing logo/zombie.png`,
            weight: 3, //2%
          },
          {
            id: 7,
            name: "Alien",
            path: `${dir}/clothing logo/alien.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyebrows",
        elements: [
          {
            id: 0,
            name: "None",
            path: `${dir}/eyebrows/none.png`,
            weight: 100, //25%
          },
          {
            id: 1,
            name: "Plain",
            path: `${dir}/eyebrows/plain.png`,
            weight: 75, //25%
          },
          {
            id: 2,
            name: "Raised",
            path: `${dir}/eyebrows/raised.png`,
            weight: 50, //20%
          },
          {
            id: 3,
            name: "Short",
            path: `${dir}/eyebrows/short.png`,
            weight: 30, //15%
          },
          {
            id: 4,
            name: "Thin",
            path: `${dir}/eyebrows/thin.png`,
            weight: 15, //8%
          },
          {
            id: 5,
            name: "Vampire",
            path: `${dir}/eyebrows/vampire.png`,
            weight: 7, //4%
          },
          {
            id: 6,
            name: "Zombie",
            path: `${dir}/eyebrows/zombie.png`,
            weight: 3, //2%
          },
          {
            id: 7,
            name: "Alien",
            path: `${dir}/eyebrows/alien.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyes",
        elements: [
          {
            id: 0,
            name: "Lazy",
            path: `${dir}/eyes/lazy.png`,
            weight: 100, //25%
          },
          {
            id: 1,
            name: "Lashes",
            path: `${dir}/eyes/lashes.png`,
            weight: 75, //25%
          },
          {
            id: 2,
            name: "Relaxed",
            path: `${dir}/eyes/relaxed.png`,
            weight: 50, //20%
          },
          {
            id: 3,
            name: "Squint",
            path: `${dir}/eyes/squint.png`,
            weight: 30, //15%
          },
          {
            id: 4,
            name: "Stare",
            path: `${dir}/eyes/stare.png`,
            weight: 15, //8%
          },
          {
            id: 5,
            name: "Vampire",
            path: `${dir}/eyes/vampire.png`,
            weight: 7, //4%
          },
          {
            id: 6,
            name: "Zombie",
            path: `${dir}/eyes/zombie.png`,
            weight: 3, //2%
          },
          {
            id: 7,
            name: "Alien",
            path: `${dir}/eyes/alien.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyewear",
        elements: [
          {
            id: 0,
            name: "None",
            path: `${dir}/eyewear/none.png`,
            weight: 100, //70%
          },
          {
            id: 1,
            name: "Swag glasses",
            path: `${dir}/eyewear/swag glasses.png`,
            weight: 30, //15%
          },
          {
            id: 2,
            name: "Clown makeup",
            path: `${dir}/eyewear/clown makeup.png`,
            weight: 15, //8%
          },
          {
            id: 3,
            name: "Harry's glasses",
            path: `${dir}/eyewear/harry's glasses.png`,
            weight: 7, //4%
          },
          {
            id: 4,
            name: "Vampire scar",
            path: `${dir}/eyewear/vampire scar.png`,
            weight: 3, //2%
          },
          {
            id: 5,
            name: "Alien glasses",
            path: `${dir}/eyewear/alien glasses.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mouth",
        elements: [
          {
            id: 0,
            name: "pout",
            path: `${dir}/mouth/pout.png`,
            weight: 100, //50%
          },
          {
            id: 1,
            name: "Smirk",
            path: `${dir}/mouth/smirk.png`,
            weight: 50, //20%
          },
          {
            id: 2,
            name: "Open",
            path: `${dir}/mouth/open.png`,
            weight: 30, //15%
          },
          {
            id: 3,
            name: "Creepy",
            path: `${dir}/mouth/creepy.png`,
            weight: 15, //8%
          },
          {
            id: 4,
            name: "Vampire",
            path: `${dir}/mouth/vampire.png`,
            weight: 7, //4%
          },
          {
            id: 5,
            name: "Zombie",
            path: `${dir}/mouth/zombie.png`,
            weight: 3, //2%
          },
          {
            id: 6,
            name: "Alien",
            path: `${dir}/mouth/alien.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Nose",
        elements: [
          {
            id: 0,
            name: "human",
            path: `${dir}/nose/human.png`,
            weight: 100, //50%
          },
          {
            id: 1,
            name: "Pointy",
            path: `${dir}/nose/pointy.png`,
            weight: 50, //20%
          },
          {
            id: 2,
            name: "Long",
            path: `${dir}/nose/long.png`,
            weight: 30, //15%
          },
          {
            id: 3,
            name: "Creepy",
            path: `${dir}/nose/creepy.png`,
            weight: 15, //8%
          },
          {
            id: 4,
            name: "Vampire",
            path: `${dir}/nose/vampire.png`,
            weight: 7, //4%
          },
          {
            id: 5,
            name: "Zombie",
            path: `${dir}/nose/zombie.png`,
            weight: 3, //2%
          },
          {
            id: 6,
            name: "Alien",
            path: `${dir}/nose/alien.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Headwear",
        elements: [
          {
            id: 0,
            name: "None",
            path: `${dir}/headwear/none.png`,
            weight: 100, //25%
          },
          {
            id: 1,
            name: "Headphones",
            path: `${dir}/headwear/headphones.png`,
            weight: 75, //25%
          },
          {
            id: 2,
            name: "Beanie",
            path: `${dir}/headwear/beanie.png`,
            weight: 50, //20%
          },
          {
            id: 3,
            name: "Brain",
            path: `${dir}/headwear/brain.png`,
            weight: 30, //15%
          },
          {
            id: 4,
            name: "Birds",
            path: `${dir}/headwear/birds.png`,
            weight: 15, //8%
          },
          {
            id: 5,
            name: "Tattoo",
            path: `${dir}/headwear/tattoo.png`,
            weight: 7, //4%
          },
          {
            id: 6,
            name: "Zombie hat",
            path: `${dir}/headwear/zombie hat.png`,
            weight: 3, //2%
          },
          {
            id: 7,
            name: "Alien headset",
            path: `${dir}/headwear/alien headset.png`,
            weight: 1, //1%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};

interface Resources {
  trait: string;
  value: Number;
  colour: string;
  colourClass: string;
  id: Number;
  description: string;
  img: string;
}

export const Resources: Array<Resources> = [
  {
    trait: "Wood",
    value: 5015,
    colour: "#78350f",
    colourClass: "bg-yellow-900/60 border-yellow-900",
    id: 1,
    description:
      "Wood is the backbone of civilization. Fire, industry, and shelter spawned from its sinew and sap.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/wood.gif?raw=true",
  },

  {
    trait: "Stone",
    value: 3941,
    colour: "#e0e0e0",
    colourClass: "bg-gray-500/60 text-gray-300 border-gray-300",
    id: 2,
    description:
      "Stone masonry is a culture bending the bones of the earth itself to their own purpose.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/stone.gif?raw=true",
  },
  {
    trait: "Coal",
    value: 3833,
    colour: "#757575",
    colourClass: "bg-gray-300/60 border-gray-600 text-black",
    id: 3,
    description:
      "Coal is the only answer when fire is not enough to stave off the gnawing, winter cold or the ravenous demands of iron forges.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/coal.gif?raw=true",
  },
  {
    trait: "Copper",
    value: 2643,
    colour: "#f59e0b",
    colourClass: "bg-yellow-500/60 border-yellow-900 text-yellow-200",
    id: 4,
    description:
      "The malleability of copper is a strength. A copper axe will crush a skull as easily as a copper pot sizzles an egg.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/copper.gif?raw=true",
  },
  {
    trait: "Obsidian",
    value: 2216,
    colour: "#000000",
    colourClass: "bg-black/60 border-black",
    id: 5,
    description:
      "Hard and brittle, obsidian can be honed to a razors edge nanometers wide, parting armor on an atomic level. The preferred material of assassins and cheap jewelers.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/obsidian.gif?raw=true",
  },
  {
    trait: "Silver",
    value: 1741,
    colour: "#eeeeee",
    colourClass: "bg-gray-300/60 text-gray-50 border-gray-500",
    id: 6,
    description:
      "The luster and rarity of silver draws out the basest instinct of laymen and nobility alike. Greed.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/silver.gif?raw=true",
  },

  {
    trait: "Ironwood",
    value: 1179,
    colour: "#b91c1c",
    colourClass: "bg-red-700/60 border-red-700",
    id: 7,
    description:
      "Metallic minerals drawn from the ironwood’s deep delving roots are the source of its legendary hardness and appearance.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/ironwood.gif?raw=true",
  },
  {
    trait: "Cold Iron",
    value: 957,
    colour: "#fca5a5",
    colourClass: "bg-red-300/60 text-red-900 border-red-300",
    id: 8,
    description:
      "Something has infected this metallic ore with a cruel chill and an extraordinary thirst for the warmth of living things.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/cold%20iron.gif?raw=true",
  },
  {
    trait: "Gold",
    value: 914,
    colour: "#fcd34d",
    colourClass: "bg-yellow-300/60 text-yellow-900 border-yellow-300",
    id: 9,
    description:
      "Ripped from its million-year geological womb within the earth to be hoarded in mortal coffers.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/gold.gif?raw=true",
  },
  {
    trait: "Hartwood",
    value: 594,
    colour: "#fca5a5",
    colourClass: "border-red-300/60 bg-gradient-to-r from-red-500 via-purple-100 to-yellow-200 text-red-800",
    id: 10,
    description:
      "Revered by the Orders of Cunning, hartwood is only cut in dire circumstance. It bleeds like any mortal and some claim to hear voices from its sap long after being tapped from the trunk.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/hartwood.gif?raw=true",
  },
  {
    trait: "Diamonds",
    value: 300,
    colour: "#ccbcfb",
    colourClass: "bg-purple-200/60 text-purple-700 border-purple-700",
    id: 11,
    description:
      "Diamonds carry the hardness of obsidian, the strength of cold iron, and the preciousness of gold. Blood is easily spilled in its name.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/diamond.gif?raw=true",
  },
  {
    trait: "Sapphire",
    value: 247,
    colour: "#3b82f6",
    colourClass: "bg-blue-500/60 border-blue-500",
    id: 12,
    description:
      "Sapphires are given birth from titanic forces that crush and grind for thousands of years in a hellscape of heat and pressure. The result is a gemstone accustomed to both pain and beauty.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/sapphire.gif?raw=true",
  },
  {
    trait: "Ruby",
    value: 239,
    colour: "#dc2626",
    colourClass: "bg-red-600/60 border-red-600",
    id: 13,
    description:
      "Rubies are the chimeric fusion of metal alloys and oxygen. This hybrid of metal and minerals is often scarcer than the lives of those who seek it.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/ruby.gif?raw=true",
  },
  {
    trait: "Deep Crystal",
    value: 239,
    colour: "#93c5fd",
    colourClass: "bg-blue-300/60 border-blue-300",
    id: 14,
    description:
      "Deep crystal was imprisoned from the mortal world by a timeless geode, the source of these formations have confounded scholars for centuries. Strange vibrations can be felt when held.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/deep%20crystal.gif?raw=true",
  },
  {
    trait: "Ignium",
    value: 172,
    colour: "#ef4444",
    colourClass: "bg-red-500/60 text-yellow-200 border-red-500",
    id: 15,
    description:
      "Some horrible power has irrevocably scarred this ignium stone with an infernal radiation that evaporates water and skin alike.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/ignium.gif?raw=true",
  },
  {
    trait: "Ethereal Silica",
    value: 162,
    colour: "#10b981",
    colourClass: "bg-green-500/60 border-green-500",
    id: 16,
    description:
      "Ethereal silica is a glass that funnels and bends light in ways that deviate from known physics. Those exposed for long periods of time experience an all- consuming lethargic bliss.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/ethereal%20silica.gif?raw=true",
  },
  {
    trait: "True Ice",
    value: 139,
    colour: "#ffffff",
    colourClass: "bg-white/60 text-blue-700 border-blue-700",
    id: 17,
    description:
      "True ice does not melt, it is carved like living stone from frozen abyssal caverns far beneath the earth. Many a careless mason has lost their life when placing this near Ignium.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/true%20ice.gif?raw=true",
  },
  {
    trait: "Twilight Quartz",
    value: 111,
    colour: "#6d28d9",
    colourClass: "bg-purple-700/60 border-purple-700",
    id: 18,
    description:
      "Fortunately, this gemstone grows deep within the earth, far away from the soft flesh of mortal kind. Its elegance hides a tendency to rapidly engulf organic matter it encounters in a matter of hours.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/twilight%20quartz.gif?raw=true",
  },
  {
    trait: "Alchemical Silver",
    value: 93,
    colour: "#bdbdbd",
    colourClass: "bg-gray-400/60 border-gray-400",
    id: 19,
    description:
      "Alchemical Silver is found pooled beneath battlegrounds from a forgotten, lost era. It can retain an almost unlimited amount of potential energy, making it the perfect catalyst for those delving into the mysteries of the universe.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/alchemical%20silver.gif?raw=true",
  },
  {
    trait: "Adamantine",
    value: 55,
    colour: "#1e3a8a",
    colourClass: "border-green-800/60 bg-gradient-to-r from-green-900 to-yellow-500",
    id: 20,
    description:
      "Adamantine forms around ontological anomalies like the immune response of a planetary entity. It contains the supernatural strength to contain such terrors from spreading. Woe to those who shortsightedly take it from its original purpose.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/adamantine.gif?raw=true",
  },
  {
    trait: "Mithral",
    value: 37,
    colour: "#60a5fa",
    colourClass: "bg-blue-400/60 border-blue-400",
    id: 21,
    description:
      "This otherworldly metal has the strength of adamantine but is lighter than air. The pieces are held in place by strange gravitational core. Those who spend much time with it slowly succumb to neurotic delusions of a rapturous, divine apocalypse.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/mithral.gif?raw=true",
  },
  {
    trait: "Dragonhide",
    value: 23,
    colour: "#ec4899",
    colourClass: "bg-pink-500/60 border-pink-500",
    id: 22,
    description:
      "Dragons are the hidden guardians of our reality. No mortal can witness their work, lest they be purged by dragonfire. If you find one of these scales, flee. Only death can be found in their presence or by the forces they fight in secret.",
    img: "https://github.com/BibliothecaForAdventurers/voxel-resources/blob/main/compressed/dragonhide.gif?raw=true",
  },
];
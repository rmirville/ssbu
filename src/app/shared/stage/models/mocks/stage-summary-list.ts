import { StageSummary } from '../stage-summary.model';

export const PRINCESS_PEACH_CASTLE = [
  {
    "name": "Princess Peach's Castle",
    "gameName": "mario_castledx_",
    "Type": 0
  }
];

export const BAD_DATA = [
  [
    {
    "name": 7,
    "gameName": "mario_castledx_",
    "Type": 0
    }
  ],
  [
    {
      "name": "Princess Peach's Castle",
      "gameName": 8,
      "Type": 0
    }
  ],
  [
    {
      "name": "Princess Peach's Castle",
      "gameName": "mario_castledx_",
      "Type": "number"
    }
  ],
  {
    "name": "Princess Peach's Castle",
    "gameName": "mario_castledx_",
    "Type": 0
  }
];

export const TWO_STAGES_EXCLUDE = [
  {
    "name": "Princess Peach's Castle",
    "gameName": "mario_castledx_",
    "Type": 0
  },
  {
    "name": "Magicant",
    "gameName": "magicant_",
    "Type": 0
  }
];

export const FOUR_STAGES_EXCLUDE = [
  {
    "name": "Princess Peach's Castle",
    "gameName": "mario_castledx_",
    "Type": 0
  },
  {
    "name": "Magicant",
    "gameName": "magicant_",
    "Type": 0
  },
  {
    "name": "Great Plateau Tower",
    "gameName": "zelda_tower",
    "Type": 0
  },
  {
    "name": "Yoshi's Story",
    "gameName": "yoshi_cartboard_",
    "Type": 0
  }
];

export const BAD_STAGE_EXCLUDE = [
  {
    "name": "Great Plateau Tower",
    "gameName": "zelda_tower",
    "Type": 0
  },
  {
    "name": "Yoshi's Story",
    "gameName": "yoshi_cartboard_",
    "Type": 0
  }
];

export const STAGE_INCLUDE = [
  {
    "name": "Princess Peach's Castle",
    "gameName": "mario_castledx_",
    "Type": 0
  },
  {
    "name": "Great Plateau Tower",
    "gameName": "zelda_tower",
    "Type": 0
  },
  {
    "name": "Magicant",
    "gameName": "magicant_",
    "Type": 0
  },
  {
    "name": "Yoshi's Story",
    "gameName": "yoshi_cartboard_",
    "Type": 0
  }
];

export const DETAILS_OUTOFORDER: { summaries: StageSummary[], normalNames: string[], lateName: string } = {
  summaries: [
    {
      "name": "Great Plateau Tower",
      "gameName": "zelda_tower",
      "Type": 0
    },
    {
      "name": "Yoshi's Story",
      "gameName": "yoshi_cartboard_",
      "Type": 0
    },
    {
      "name": "Princess Peach's Castle",
      "gameName": "mario_castledx_",
      "Type": 0
    },
  ],
  normalNames: [
    "Great Plateau Tower",
    "Princess Peach's Castle"
  ],
  lateName: "Yoshi's Story"
};

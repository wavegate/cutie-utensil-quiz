
export interface QuizQuestion {
  id: string;
  question: string;
  options: Array<{
    key: string;
    text: string;
    traits: string[];
  }>;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "morning_routine",
    question: "How do you typically start your morning in the kitchen? ☀️",
    options: [
      {
        key: "quick_efficient",
        text: "Quick and efficient - grab what I need and go!",
        traits: ["efficient", "practical", "sharp"]
      },
      {
        key: "slow_methodical",
        text: "Slow and methodical - I like to prepare everything carefully",
        traits: ["patient", "thorough", "gentle"]
      },
      {
        key: "creative_experimental",
        text: "Creative and experimental - I love trying new breakfast ideas!",
        traits: ["creative", "versatile", "innovative"]
      },
      {
        key: "simple_reliable",
        text: "Simple and reliable - same routine, works every time",
        traits: ["consistent", "reliable", "steady"]
      }
    ]
  },
  {
    id: "cooking_style",
    question: "What's your preferred cooking style? 👨‍🍳",
    options: [
      {
        key: "precise_measurements",
        text: "I measure everything precisely and follow recipes exactly",
        traits: ["precise", "methodical", "reliable"]
      },
      {
        key: "intuitive_tasting",
        text: "I cook by intuition, tasting and adjusting as I go",
        traits: ["intuitive", "flexible", "sensory"]
      },
      {
        key: "bold_experimenting",
        text: "I love experimenting with bold flavors and techniques",
        traits: ["adventurous", "creative", "bold"]
      },
      {
        key: "comfort_classics",
        text: "I stick to comfort food classics that everyone loves",
        traits: ["nurturing", "traditional", "warm"]
      }
    ]
  },
  {
    id: "social_cooking",
    question: "How do you feel about cooking with others? 👥",
    options: [
      {
        key: "love_collaboration",
        text: "I love it! The more hands, the merrier!",
        traits: ["social", "collaborative", "inclusive"]
      },
      {
        key: "prefer_solo",
        text: "I prefer cooking alone - it's my meditation time",
        traits: ["independent", "focused", "introspective"]
      },
      {
        key: "enjoy_teaching",
        text: "I enjoy teaching others and sharing techniques",
        traits: ["helpful", "patient", "knowledgeable"]
      },
      {
        key: "situational",
        text: "It depends on my mood and what I'm making",
        traits: ["adaptable", "balanced", "flexible"]
      }
    ]
  },
  {
    id: "kitchen_organization",
    question: "How do you keep your kitchen organized? 🏠",
    options: [
      {
        key: "everything_place",
        text: "Everything has its place and I keep it there",
        traits: ["organized", "systematic", "tidy"]
      },
      {
        key: "functional_chaos",
        text: "It looks chaotic but I know where everything is",
        traits: ["creative", "unconventional", "intuitive"]
      },
      {
        key: "minimalist_essential",
        text: "I keep only the essentials - less is more",
        traits: ["minimalist", "practical", "efficient"]
      },
      {
        key: "constantly_rearranging",
        text: "I'm constantly rearranging to optimize my workflow",
        traits: ["perfectionist", "detail-oriented", "improving"]
      }
    ]
  },
  {
    id: "favorite_meal_prep",
    question: "What's your favorite type of meal to prepare? 🍽️",
    options: [
      {
        key: "elaborate_dinners",
        text: "Elaborate dinners with multiple courses",
        traits: ["ambitious", "sophisticated", "thorough"]
      },
      {
        key: "quick_healthy",
        text: "Quick, healthy meals that fuel my day",
        traits: ["practical", "health-conscious", "efficient"]
      },
      {
        key: "comfort_soul",
        text: "Comfort food that warms the soul",
        traits: ["nurturing", "emotional", "caring"]
      },
      {
        key: "artistic_presentation",
        text: "Beautiful dishes that are almost too pretty to eat",
        traits: ["artistic", "detail-oriented", "aesthetic"]
      }
    ]
  },
  {
    id: "kitchen_challenges",
    question: "How do you handle kitchen mishaps and mistakes? 😅",
    options: [
      {
        key: "learn_adapt",
        text: "I learn from them and adapt quickly",
        traits: ["resilient", "learning", "adaptable"]
      },
      {
        key: "stay_calm",
        text: "I stay calm and find creative solutions",
        traits: ["calm", "problem-solving", "creative"]
      },
      {
        key: "start_over",
        text: "I prefer to start over and do it right",
        traits: ["perfectionist", "determined", "thorough"]
      },
      {
        key: "laugh_it_off",
        text: "I laugh it off - cooking should be fun!",
        traits: ["optimistic", "easygoing", "joyful"]
      }
    ]
  },
  {
    id: "texture_preference",
    question: "What textures do you gravitate toward in cooking? 🤤",
    options: [
      {
        key: "smooth_creamy",
        text: "Smooth and creamy - like perfect sauces and soups",
        traits: ["smooth", "gentle", "comforting"]
      },
      {
        key: "crispy_crunchy",
        text: "Crispy and crunchy - I love that satisfying bite",
        traits: ["sharp", "precise", "satisfying"]
      },
      {
        key: "light_airy",
        text: "Light and airy - like perfectly whipped cream",
        traits: ["light", "delicate", "ethereal"]
      },
      {
        key: "hearty_substantial",
        text: "Hearty and substantial - food that sticks to your ribs",
        traits: ["substantial", "grounding", "nourishing"]
      }
    ]
  },
  {
    id: "entertaining_style",
    question: "How do you approach entertaining guests? 🎉",
    options: [
      {
        key: "elaborate_impressive",
        text: "I go all out with elaborate, impressive spreads",
        traits: ["impressive", "generous", "showstopping"]
      },
      {
        key: "simple_elegant",
        text: "Simple but elegant - quality over quantity",
        traits: ["elegant", "refined", "quality-focused"]
      },
      {
        key: "interactive_fun",
        text: "Interactive and fun - everyone gets involved",
        traits: ["interactive", "inclusive", "fun"]
      },
      {
        key: "comfort_homey",
        text: "Comfortable and homey - like a warm hug",
        traits: ["comfortable", "homey", "welcoming"]
      }
    ]
  },
  {
    id: "kitchen_multitasking",
    question: "How do you handle multiple cooking tasks at once? ⚡",
    options: [
      {
        key: "master_multitasker",
        text: "I'm a master multitasker - bring on the chaos!",
        traits: ["multitasking", "energetic", "coordinated"]
      },
      {
        key: "one_thing_time",
        text: "I prefer to focus on one thing at a time",
        traits: ["focused", "methodical", "careful"]
      },
      {
        key: "organized_system",
        text: "I have an organized system and timeline",
        traits: ["organized", "systematic", "planned"]
      },
      {
        key: "go_with_flow",
        text: "I go with the flow and see what happens",
        traits: ["flexible", "spontaneous", "adaptable"]
      }
    ]
  },
  {
    id: "cooking_motivation",
    question: "What motivates you most about cooking? 💝",
    options: [
      {
        key: "nourish_others",
        text: "Nourishing and caring for the people I love",
        traits: ["nurturing", "caring", "loving"]
      },
      {
        key: "creative_expression",
        text: "It's my creative outlet and form of expression",
        traits: ["creative", "expressive", "artistic"]
      },
      {
        key: "mastery_skill",
        text: "Mastering techniques and perfecting my skills",
        traits: ["ambitious", "skilled", "improving"]
      },
      {
        key: "simple_sustenance",
        text: "Simple sustenance - fuel for life's adventures",
        traits: ["practical", "efficient", "purposeful"]
      }
    ]
  }
];

export const utensilPersonalities = {
  wooden_spoon: {
    name: "Wooden Spoon",
    emoji: "🥄",
    description: "You're the heart and soul of the kitchen! Like a trusty wooden spoon, you're gentle, nurturing, and always there when needed. You bring warmth and comfort to everything you touch, and people naturally turn to you for support and care.",
    traits: [
      "Nurturing and caring by nature",
      "Gentle but incredibly strong",
      "Traditional values with timeless wisdom",
      "Natural mediator and peacekeeper"
    ],
    strengths: [
      "You make everyone feel welcomed and loved",
      "Excellent at bringing people together",
      "Patient and understanding listener",
      "Create comfort and stability for others"
    ]
  },
  chef_knife: {
    name: "Chef's Knife",
    emoji: "🔪",
    description: "You're sharp, efficient, and get straight to the point! Like a quality chef's knife, you're precise, reliable, and absolutely essential. You tackle challenges head-on with skill and confidence, and others rely on your expertise.",
    traits: [
      "Direct and decisive in approach",
      "Highly skilled and competent",
      "Natural leader and problem-solver",
      "Values precision and excellence"
    ],
    strengths: [
      "You cut through confusion to find solutions",
      "Highly efficient and productive",
      "Others look to you for guidance",
      "Excellent at handling complex situations"
    ]
  },
  whisk: {
    name: "Whisk",
    emoji: "🥛",
    description: "You're the ultimate multitasker and social butterfly! Like a whisk, you're energetic, versatile, and amazing at bringing different elements together. You add lightness and joy to every situation and can handle multiple things at once with grace.",
    traits: [
      "Energetic and always in motion",
      "Excellent at multitasking",
      "Brings people and ideas together",
      "Optimistic and uplifting presence"
    ],
    strengths: [
      "You create harmony from chaos",
      "Natural at networking and connecting others",
      "Bring lightness to heavy situations",
      "Incredibly adaptable and flexible"
    ]
  },
  cast_iron_pan: {
    name: "Cast Iron Pan",
    emoji: "🍳",
    description: "You're solid, dependable, and only get better with time! Like cast iron, you're incredibly durable and versatile. You might take a while to warm up, but once you do, you maintain that warmth beautifully and can handle anything life throws at you.",
    traits: [
      "Steady and incredibly reliable",
      "Gets better with experience",
      "Can handle high-pressure situations",
      "Traditional and time-tested approach"
    ],
    strengths: [
      "You provide consistent, reliable results",
      "Extremely versatile and adaptable",
      "Others depend on your stability",
      "You improve and mature with every challenge"
    ]
  },
  measuring_cup: {
    name: "Measuring Cup",
    emoji: "📏",
    description: "You're precise, organized, and love bringing structure to chaos! Like a measuring cup, you're all about accuracy and helping others get the perfect balance. You're the friend people call when they need things done right.",
    traits: [
      "Detail-oriented and meticulous",
      "Loves organization and structure",
      "Values accuracy and precision",
      "Helpful and reliable guide for others"
    ],
    strengths: [
      "You help others achieve perfect balance",
      "Excellent at planning and organizing",
      "People trust your judgment and advice",
      "You bring order to chaotic situations"
    ]
  },
  tongs: {
    name: "Kitchen Tongs",
    emoji: "🦞",
    description: "You're the helper everyone needs! Like tongs, you're incredibly useful, always ready to lend a hand, and can adapt to almost any situation. You're great at bringing people together and helping them reach their goals.",
    traits: [
      "Always ready to help and assist",
      "Highly adaptable to any situation",
      "Great at handling delicate matters",
      "Natural facilitator and connector"
    ],
    strengths: [
      "You help others reach their potential",
      "Excellent at handling sensitive situations",
      "Very practical and solution-oriented",
      "People rely on your helpful nature"
    ]
  }
};

export const calculateResult = (answers: Record<string, string>) => {
  const traitCounts: Record<string, number> = {};
  
  // Count trait occurrences
  Object.entries(answers).forEach(([questionId, answerKey]) => {
    const question = quizQuestions.find(q => q.id === questionId);
    if (question) {
      const selectedOption = question.options.find(opt => opt.key === answerKey);
      if (selectedOption) {
        selectedOption.traits.forEach(trait => {
          traitCounts[trait] = (traitCounts[trait] || 0) + 1;
        });
      }
    }
  });

  // Determine utensil based on dominant traits
  let resultUtensil = 'wooden_spoon'; // default
  
  const hasTraits = (traits: string[]) => 
    traits.some(trait => (traitCounts[trait] || 0) >= 2);

  if (hasTraits(['sharp', 'precise', 'efficient', 'practical'])) {
    resultUtensil = 'chef_knife';
  } else if (hasTraits(['energetic', 'multitasking', 'creative', 'versatile'])) {
    resultUtensil = 'whisk';
  } else if (hasTraits(['reliable', 'steady', 'substantial', 'traditional'])) {
    resultUtensil = 'cast_iron_pan';
  } else if (hasTraits(['organized', 'precise', 'methodical', 'systematic'])) {
    resultUtensil = 'measuring_cup';
  } else if (hasTraits(['helpful', 'adaptable', 'practical', 'facilitating'])) {
    resultUtensil = 'tongs';
  }

  const utensil = utensilPersonalities[resultUtensil as keyof typeof utensilPersonalities];

  // Generate compatibility based on utensil type
  const compatibility = getCompatibility(resultUtensil);
  const personalityInsights = generatePersonalityInsights(traitCounts, resultUtensil);
  const funFacts = generateFunFacts(resultUtensil);

  return {
    utensil,
    compatibility,
    personalityInsights,
    funFacts
  };
};

const getCompatibility = (utensilType: string) => {
  const compatibilityMap: Record<string, Array<{name: string; emoji: string; reason: string}>> = {
    wooden_spoon: [
      { name: "Cast Iron Pan", emoji: "🍳", reason: "You both appreciate tradition and get better with time!" },
      { name: "Measuring Cup", emoji: "📏", reason: "Your caring nature pairs perfectly with their precision!" },
      { name: "Kitchen Tongs", emoji: "🦞", reason: "Both of you are always ready to help others!" }
    ],
    chef_knife: [
      { name: "Cutting Board", emoji: "🪵", reason: "You're unstoppable when you have solid support!" },
      { name: "Sharpening Steel", emoji: "⚔️", reason: "They help keep your edge sharp and ready!" },
      { name: "Measuring Cup", emoji: "📏", reason: "Precision meets precision - a perfect match!" }
    ],
    whisk: [
      { name: "Mixing Bowl", emoji: "🥣", reason: "You create magic together in perfect harmony!" },
      { name: "Kitchen Tongs", emoji: "🦞", reason: "Both versatile multitaskers who get things done!" },
      { name: "Wooden Spoon", emoji: "🥄", reason: "Your energy complements their steady warmth!" }
    ],
    cast_iron_pan: [
      { name: "Wooden Spoon", emoji: "🥄", reason: "Classic combination that never goes out of style!" },
      { name: "Chef's Knife", emoji: "🔪", reason: "Both reliable tools that professionals depend on!" },
      { name: "Heat-Resistant Spatula", emoji: "🍴", reason: "They can handle your intensity and heat!" }
    ],
    measuring_cup: [
      { name: "Kitchen Scale", emoji: "⚖️", reason: "You both value accuracy and perfect measurements!" },
      { name: "Chef's Knife", emoji: "🔪", reason: "Precision tools that create professional results!" },
      { name: "Recipe Book", emoji: "📖", reason: "You both believe in following the right formula!" }
    ],
    tongs: [
      { name: "Grill Grates", emoji: "🔥", reason: "You're perfect partners for outdoor cooking adventures!" },
      { name: "Salad Bowl", emoji: "🥗", reason: "Great for gently tossing and serving with care!" },
      { name: "Whisk", emoji: "🥛", reason: "Both adaptable tools ready for any kitchen challenge!" }
    ]
  };

  return compatibilityMap[utensilType] || compatibilityMap.wooden_spoon;
};

const generatePersonalityInsights = (traitCounts: Record<string, number>, utensilType: string) => {
  const insights = [];
  
  const topTraits = Object.entries(traitCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .map(([trait]) => trait);

  if (topTraits.includes('creative')) {
    insights.push("Your creative spirit shines through in everything you do. You see possibilities where others see problems!");
  }
  
  if (topTraits.includes('practical')) {
    insights.push("You have a wonderfully practical approach to life. People appreciate your ability to find real-world solutions.");
  }
  
  if (topTraits.includes('nurturing')) {
    insights.push("Your nurturing nature makes you a natural caregiver. You create spaces where people feel safe and loved.");
  }
  
  if (topTraits.includes('precise')) {
    insights.push("Your attention to detail and precision sets you apart. You have high standards and aren't afraid to pursue excellence.");
  }

  // Add utensil-specific insights
  const utensilInsights: Record<string, string[]> = {
    wooden_spoon: ["You have an old soul with timeless wisdom that others seek out."],
    chef_knife: ["You're a natural leader who others turn to when decisions need to be made."],
    whisk: ["Your positive energy is contagious and lifts up everyone around you."],
    cast_iron_pan: ["You're the foundation that others build upon - steady and strong."],
    measuring_cup: ["You bring balance and harmony to chaotic situations."],
    tongs: ["You have a special gift for helping others reach their full potential."]
  };

  insights.push(...(utensilInsights[utensilType] || []));

  return insights.slice(0, 3); // Limit to 3 insights
};

const generateFunFacts = (utensilType: string) => {
  const funFactsMap: Record<string, string[]> = {
    wooden_spoon: [
      "You probably give the best hugs and make people feel instantly comfortable",
      "Your friends come to you first when they need advice or comfort",
      "You have a secret talent for making everything feel like home",
      "You're the type who remembers everyone's favorite comfort food"
    ],
    chef_knife: [
      "You're probably really good at making quick decisions under pressure",
      "People describe you as having a 'sharp wit' and keen insight",
      "You likely have a collection of high-quality tools or items you treasure",
      "You're the friend who can solve problems others find impossible"
    ],
    whisk: [
      "You probably love hosting parties and bringing people together",
      "You have an amazing ability to lighten the mood in any situation",
      "You're likely great at juggling multiple projects or hobbies",
      "Your energy level amazes (and sometimes exhausts) your friends"
    ],
    cast_iron_pan: [
      "You get more interesting and valuable with every year that passes",
      "You're probably someone people can always depend on in a crisis",
      "You likely have some skills or hobbies you've been perfecting for years",
      "Your friends know you'll still be there for them decades from now"
    ],
    measuring_cup: [
      "You probably have the most organized space among your friend group",
      "People come to you when they need help planning events or projects",
      "You likely remember important dates and details others forget",
      "Your advice is always balanced and well-thought-out"
    ],
    tongs: [
      "You're probably the friend who always offers to help with everything",
      "You have a talent for bringing out the best in other people",
      "You're likely great at handling delicate or sensitive situations",
      "People feel comfortable opening up to you about personal matters"
    ]
  };

  return funFactsMap[utensilType] || funFactsMap.wooden_spoon;
};

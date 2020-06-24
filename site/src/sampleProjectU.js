
const sampleProjectU = {
    link1: {
        label: "Main Site",
        link: "",

    },
    link2: {
        label: "Link 2",
        link: ""
    },
    link3: {
        label: "Toggle Quick-Rules",
        action: ""
    },
    actionSuccess: [
        {
            title: "Critical Success",
            description: "Do what you want, plus a bonus.",
            evaluateDesc: "Ask two questions from the list below."
        },   
        {
            title: "Success",
            description: "Do what you want.",
            evaluateDesc: "Ask one question from the list below."
        },
        {   
            title: "Minor Success",
            description: "Do what you want, but pay a small price",
            evaluateDesc: "Ask a question from the list below, but pay a small price."
        },
        {   
            title: "Minor Setback",
            description: "Don't do what you want.",
            evaluateDesc: "Fail to get a question answered."
        },
        {   
            title: "Setback",
            description: "Don’t do what you want and pay a small price.",
            evaluateDesc: "Get no questions answered and pay a small price."
        },   
        {
            title: "Critical Setback",
            description: "Don’t do what you want and pay a large price.",
            evaluateDesc: "Get no questions answered and pay a large price"
        },   
    ],
    backgrounds: [
        {
            title: "Politics",
            description: "You are owed a favor from a high-profile person. (Deliberate)"
        },
        {
            title: "Orphan",
            description: "Most people cannot recall that they’ve ever met you unless you make an impression."
        },
        {
            title: "Military",
            description: "Decrease the amount of damage you take from your setbacks by 1."
        },
        {
            title: "Agriculture",
            description: "You can expertly hunt, trap, and prepare meals from animals in the wild."
        },
        {
            title: "Academics",
            description: "Strengthen Evaluate rolls pertaining to your field of study."
        },
        {
            title: "Seaworthy",
            description: "You can single-handedly captain ships that require a full crew and navigate using only stars."
        },
        {
            title: "Artist",
            description: "Gain the Upper Hand on all rolls when using your artistic medium (performance, creation, etc.)."
        },
        {
            title: "Medicine",
            description: "Once per day you can make a second Weakened roll to heal one injury from a player."
        },
        {
            title: "Arcana",
            description: "strengthen based on the kind of magic you used (figure out how to explain)."
        },
        {
            title: "Refugee",
            description: "Required sleep time is halved. Odds/Evens: Nightmares prevent you from healing when resting."
        },
        {
            title: "Clergy",
            description: "Your knowledge of a religion is unlimited. Any related church/temple will want to help you."
        },
        {
            title: "Renowned",
            description: "When considering someone you’ve never met, roll odds/evens: they already know your deeds."
        },
        {
            title: "Noble",
            description: "Begin the adventure with certain excessive material items."
        },
        {
            title: "Primitive",
            description: "Exchange the ability to read and write languages for the ability to perfectly predict weather and read stars."
        }
    ],
    intersections: [
        {
            title: "Paladin",
            traits: [
                {
                    name: "Unwavering Will",
                    action: false,
                    type: false,
                    damage: false,
                    category: false, 
                    description: "Against any intangible attack (psionic, curse, mind control etc.) which should cause unwanted movement or action, a paladin can instead choose to remain still."
                },
                {
                    name: "Light",
                    action: "Channel",
                    type: "basic",
                    damage: 2,
                    category: false,
                    description: "(Melee) You face a foe of demonic, undead, or fiendish nature."
                }
            ]
        }
    ],
    sources: [
        {
            title: "Demonic",
            tagline: "...such as a pact, curse, or demon ancestry.",
            description: "Whether an inner monster, a terrible pact, or an unnerving connection to the foul beneath us, only a few are unlucky enough to draw their strength from the darkness. Does your Demonic Origin eat you up inside, or does it make you feel pretty damn good?",
            alternateWounds: "Angered demon. Mysterious injuries. Loss of sight. Blinding rage.",
            sampleSkills: "Restless, Demonic Origin",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        },
        {
            title: "Divine",
            tagline: "...such as Anubis, dragons, Stonehenge, or divine ancestry.",
            description: "Your power is granted from on high. Gods and Angels provide you abilities most mortals can only dream of. Some follow in piety. Others obey from the shadows.",
            alternateWounds: "Loss of trust, mental pain, terrible luck, nausea.",
            sampleSkills: "Divine Presence, Conditional Love, Illumination",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        },
        {
            title: "Natural",
            tagline: "...such as Nymphs, Elementals, or Mother Nature.",
            description: "The planet and its children lend you power, making the natural your supernatural strengths. Through reverence, respect, or affluence, you’ve been permitted to access the inherent surrounding channels around you.",
            alternateWounds: "Decaying limb, robbed of breathable air, misunderstanding natural signs",
            sampleSkills: "Commune, Woven",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        },
        {
            title: "Chakrah",
            tagline: "...such as Enlightenment, years of training, or transcendence.",
            description: "Many have traveled endlessly, sacrificed fortunes, and wasted their lives in their search for power. Somehow they’ve overlooked the most available source of all: their own being. You’ve learned to tap into the natural energy of your body, turning your focus inward in order to produce incredible feats of energy and strength.",
            alternateWounds: "Tweak, Sprain, paralysis, pass out.",
            sampleSkills: "Athletic, Exert, Tweak.",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        }
    ],
    roles: [
        {
            title: "Knight",
            tagline: "Discipline strengthens the sword, but armors are forged of compassion.",
            description: "The Knight is one who has vowed to follow a strict chivalrous code. No matter the details or level of devotion, two pledges are certain: you will fear your god and honor your love. When the time comes, you see no option but to sacrifice your being for those you have vowed to protect.",
            alternateWounds: "A broken heart, Beloved disturbance.",
            sampleSkills: "Hope, Fervor, Lancelot",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        },
        {
            title: "Elementalist",
            description: "Elementalists possess influence over the planet’s four primary elements: Wind, Earth, Fire, and Water. These figures are known to be in tune with the natural forces around them, and are well versed in manipulating them. Although you maintain aptitude with all elements, you have a core which resonates with a particular primordial affinity, granting you an advantage in certain locations or situations.",
            tagline: "The components of creation listen to those who properly ask.",
            alternateWounds: "A broken heart, Beloved disturbance.",
            sampleSkills: "Hope, Fervor, Lancelot",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        },
        {
            title: "Bounty Hunter",
            description: "A member of a certain order of hunters, Bounty Hunters have gone through meticulous training in hunting, hiding, and weapon specialization. Although your skills originated from your order’s teachings, you have likely developed unique abilities based on the foes that you’ve faced. Known to carry a wide variety of weaponry for both close and ranged combat, the Bounty Hunter is a fearsome tracker, fighter, and strategist.",
            tagline: "Some heroes fight for glory. Not everyone is so simple.",
            alternateWounds: "A broken heart, Beloved disturbance.",
            sampleSkills: "Hope, Fervor, Lancelot",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        },
        {
            title: "Morph",
            description: "The Morph is a shape-shifting master, able to learn from beasts about how to become one of them. You may have favorites, but there is no true form for you. The Morph stands out when transformed, making it obvious to bystanders that they are not a normal animal. You walk the line between human and creature—don’t be surprised when others question your humanity.",
            tagline: "As change becomes the eternal constant of the spirit.",
            alternateWounds: "A broken heart, Beloved disturbance.",
            sampleSkills: "Hope, Fervor, Lancelot",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        },
        {
            title: "Sayer",
            description: "Sayers are masters of voice and sound. Using vibrations, you find influence in the world as you bolster allies and hinder enemies through mellow notes and dire tones. The power you hold tends to surprise even yourself, as you find obvious prowess in alleviating conflicts, filling voids of leadership, and finding cooperation in impossible situations. Sometimes, even, you might feel as if you were manipulating reality itself.",
            tagline: "When words aren't enough, you must strengthen your voice.",
            alternateWounds: "A broken heart, Beloved disturbance.",
            sampleSkills: "Hope, Fervor, Lancelot",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        },
        {
            title: "Shade",
            description: "The Shade is a sinister reincarnation of someone who has been through the turmoil of death, only to be called back once more. The cost has not been slight, for although you have been granted special abilities, your unique powers dwell in fear and decay. Because death’s door is not kind to the living, you may find hardship in certain settings—with any hard look at you, strangers will be convinced that something is terribly wrong. However, if you believe that there is fate in your return to the living, you might find solace in your darkness. ",
            tagline: "At the end, some say they've seen light. Others know differently.",
            alternateWounds: "A broken heart, Beloved disturbance.",
            sampleSkills: "Hope, Fervor, Lancelot",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        },
        {
            title: "Tactician",
            description: "No matter the circumstance—commerce, politics, or combat—the Tactician finds success by taking charge. With incredible insight, the path to triumph reveals itself through the tools at the Tactician’s disposal. Allies strengths and weaknesses are quantifiable and, should they be utilized in the proper, victory becomes assured. The Tactician will always find triumph in cooperation so long as a team surrounds them.",
            tagline: "When there’s chaos in numbers, show them a leader.",
            alternateWounds: "A broken heart, Beloved disturbance.",
            sampleSkills: "Hope, Fervor, Lancelot",
            traits: [ 
                {
                    name: "Truth",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: "Knights specialize in the diverse breadth of all weapons.",
                    flavor2: false,
                    impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
                    favorite: false,
                },
                {
                    name: "Knight's Oath",
                    action: "Passive",
                    skillLevel: "Given",
                    category: "Role",
                    damage: false,
                    flavor: `Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:`,
                    flavor2: `I promise to always..." or "I promise to never...`,
                    impact: `As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.`
                },
                {
                    name: "Courtly Love",
                    action: "Passive",
                    skillLevel: `Given`,
                    category: "Role",
                    damage: false,
                    flavor: `The Knight bestows a token of love upon someone that they cherish immensely. Upon acceptance, the recipient becomes the Knight’s Beloved. The token and its Beloved owner affect many of the Knight’s abilities.`,
                    flavor2: `A Knight without a Beloved cannot use any of their role skills.`,
                    flavor3: `A Knight always knows the location of the token of love.`,
                    flavor4: `A Knight remains in tune with any pain, physical or emotional, felt by their Beloved.`,
                    impact: `The Knight may only have one Beloved at a time. Once chosen, this bond of Courtly Love can only be broken upon an extreme change in circumstances, such as death or betrayal.`
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: "Passive",
                        skillLevel: 'Basic',
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        skillLevel: `Basic`,
                        category: `Role`,
                        damage: 2,
                        flavor: '',
                        impact: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        skillLevel: "Advanced",
                        category: 'Role',
                        damage: 2,
                        flavor: '',
                        impact: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        skillLevel: "Advanced",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        skillLevel: "Master",
                        category: "Role",
                        damage: false,
                        flavor: '',
                        impact: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        skillLevel: "Master",
                        category: "Role",
                        damage: 4,
                        flavor: '',
                        impact: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        }
    ]
}

module.exports = sampleProjectU

const sampleProjectU = {
    link1: "Link 1",
    link2: "Link 2",
    link3: "Link 3",
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
            title: "Divine",
            description: "A Divine Description",
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
        },
        {
            title: "Nature",
            description: "A Nature Description",
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
    roles: [
        {
            title: "Knight",
            description: "A Knight Description",
            traits: [ 
                {
                    name: "A Knight's Oath",
                    action: false,
                    damage: false,
                    description: `
                        Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:
                        "I promise to always..." or "I promise to never..." 
                        As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.
                    `
                },
                {
                    name: "Truth",
                    action: false,
                    damage: false,
                    description: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected."
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: false,
                        damage: false,
                        description: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        damage: 2,
                        description: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        damage: 2,
                        description: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        damage: false,
                        description: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        damage: false,
                        description: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        damage: 4,
                        description: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        },
        {
            title: "Elementalist",
            description: "An Elementalist Description",
            traits: [ 
                {
                    name: "A Knight's Oath",
                    action: false,
                    damage: false,
                    description: `
                        Similar to Paladin's Sacred Oath, the Knight chooses a god to follow. The player must make 2 promises to the god that begin with either:
                        "I promise to always..." or "I promise to never..." 
                        As long as these promises are held, they receive a blessing called the Lord On High. This blessing will revive the Knight in a new, purified body and soul within 50 ft of their Soulbind by the following sunrise, with all memories intact up to the point of their death. The Lord On High blessing will only work once and will subsequently leave the Knight. Under normal circumstances, the Knight is unaware of the blessing’s presence.
                    `
                },
                {
                    name: "Truth",
                    action: false,
                    damage: false,
                    description: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected."
                }
            ],
            skills: {
                basic: [
                    {
                        name: "Temperance",
                        action: false,
                        damage: false,
                        description: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    },
                    {
                        name: "Justice",
                        action: "Muscle",
                        damage: 2,
                        description: "An ally is “dying” or “dead”."
                    }
                ],
                advanced: [
                    {
                        name: "Joust",
                        action: "Muscle",
                        damage: 2,
                        description: "You are mounted. Gain a success boost."
                    },
                    {
                        name: "Valor",
                        action: false,
                        damage: false,
                        description: "In Danger. Gain a success boost when performing any Basic Active Skill."
                    }
                ],
                master: [
                    {
                        name: "Anything For You",
                        action: false,
                        damage: false,
                        description: "In their place, the Knight can choose to be the recipient of any incoming damage of a nearby creature. This cannot be mitigated this damage in any way."
                    },
                    {
                        name: "Lancelot",
                        action: "Muscle",
                        damage: 4,
                        description: "Using a piercing weapon, impale an opponent with zealous might. Your weapon is unusable until COST.",
                        overstep: true
                    }
                ],
            }
        }
    ]
}

module.exports = sampleProjectU
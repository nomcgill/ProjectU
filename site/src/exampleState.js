
const exampleState = {
    level: 1,
    intersection: {
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
                damage: "2X",
                category: false,
                description: "(Melee) You face a foe of demonic, undead, or fiendish nature."
            }
        ]
    },
    name: "Kaira",
    source: {
        title: "Divine",
        traits: [
            {
                name: "Description",
                action: false,
                description: "Your power is granted from on high. Gods and Angels provide you abilities most mortals can only dream of."
            }
        ]
    },
    role: {
        title: "Knight",
        traits: [ 
            {
                name: "Truth",
                action: false,
                description: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected."
            }
        ]
    },
    skills: {
        basic: {
            title: "Basic",
            moves: {
                Divine: [
                    {
                        name: "Prayer of Reconciliation",
                        action: "channel",
                        description: "Implore your deity to mend a broken relationship. On a complete success, restore a relationship that you have used Burn a Bridge on."
                    }
                ],
                Knight: [
                    {
                        name: "Temperance",
                        action: false,
                        description: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    }
                ]
            }
        },
        advanced: {
            title: "Advanced", 
            moves: {
                Divine: [
                    {
                        name: "Prayer of Reconciliation",
                        action: "channel",
                        description: "Implore your deity to mend a broken relationship. On a complete success, restore a relationship that you have used Burn a Bridge on."
                    }
                ],
                Knight: [ 
                    {
                        name: "Temperance",
                        action: false,
                        description: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    }
                ]
            }
        },
        master: {
            title: "Master",
            moves: {
                Divine: [
                    {
                        name: "Prayer of Reconciliation",
                        action: "channel",
                        description: "Implore your deity to mend a broken relationship. On a complete success, restore a relationship that you have used Burn a Bridge on."
                    }
                ],
                Knight: [ 
                    {
                        name: "Temperance",
                        action: false,
                        description: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    }
                ]
            }
        }
    }
}

module.exports = exampleState
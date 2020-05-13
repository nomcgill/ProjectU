const sampleChoices = {
    level: 1,
    name: "Nameless",
    title: "",
    backgroundPast: false,
    backgroundPresent: false,
    backgroundFuture: false,
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
                                    damage: 2,
                                    category: false,
                                    description: "(Melee) You face a foe of demonic, undead, or fiendish nature."
                                }
                            ]
                        },
    source: {
        title: "Divine",
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
    role: {
        title: "Knight",
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
    skills: {
        basic: {
            title: "Basic",
            moves: [
                {
                    name: "Unwavering Will",
                    action: false,
                    type: false,
                    damage: false,
                    category: {
                        role: "Knight"
                    }, 
                    description: "Against any intangible attack (psionic, curse, mind control etc.) which should cause unwanted movement or action, a paladin can instead choose to remain still."
                },
                {
                    name: "Light",
                    action: "Channel",
                    type: "basic",
                    damage: 2,
                    category: {
                        source: "Divine"
                    },
                    description: "(Melee) You face a foe of demonic, undead, or fiendish nature."
                }
                ]
        },
        advanced: {
            title: "Advanced", 
            moves: [
                {
                    name: "Unwavering Will",
                    action: false,
                    type: false,
                    damage: false,
                    category: {
                        role: "Knight"
                    }, 
                    description: "Against any intangible attack (psionic, curse, mind control etc.) which should cause unwanted movement or action, a paladin can instead choose to remain still."
                },
                {
                    name: "Light",
                    action: "Channel",
                    type: "basic",
                    damage: 2,
                    category: {
                        source: "Divine"
                    },
                    description: "(Melee) You face a foe of demonic, undead, or fiendish nature."
                }
            ]
        },
        master: {
            title: "Master",
            moves: [
                {
                    name: "Unwavering Will",
                    action: false,
                    type: false,
                    damage: false,
                    category: {
                        role: "Knight"
                    }, 
                    description: "Against any intangible attack (psionic, curse, mind control etc.) which should cause unwanted movement or action, a paladin can instead choose to remain still."
                },
                {
                    name: "Light",
                    action: "Channel",
                    type: "basic",
                    damage: 2,
                    category: {
                        source: "Divine"
                    },
                    description: "(Melee) You face a foe of demonic, undead, or fiendish nature."
                }
            ]
        }
    }
}


module.exports = sampleChoices
const sampleChoicesRevised = {
    level: 1,
    name: "Nameless",
    title: "",
    role: "Knight",
    source: "Divine",
    intersection: "Paladin",
    backgroundPast: false,
    backgroundPresent: false,
    backgroundFuture: false,
    displayFavorites: false,
    currentSkills: [
        {
            name: "Wrath",
            action: "Passive",
            skillLevel: "Given",
            category: "Intersection",
            damage: false,
            flavor: "You are invigorated by your Power Source when your strikes land.",
            impact: "Add 1X damage on Successes and Complete Successes for Muscle actions.",
            favorite: true
        },
        {
            name: "Truth",
            action: "Passive",
            skillLevel: "Given",
            category: "Role",
            damage: false,
            flavor: "Knights specialized in the diverse breadth of all weapons.",
            impact: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected.",
            favorite: false
        },
        {
            name: "Justice",
            action: "Muscle",
            skillLevel: "Basic",
            category: "Role",
            damage: 2,
            flavor: "The weight of consequences should be brought upon those deserving.",
            impact: "An at Range ally is “dying” or “dead”. Deal 2x.",
            favorite: false
        },
        {
            name: "Joust",
            action: "Muscle",
            skillLevel: "Advanced",
            category: "Role",
            damage: 2,
            flavor: false,
            impact: "You are mounted. Gain a Success Boost and Deal 2x.",
            favorite: false
        },
        {
            name: "Anything For You",
            action: "Passive",
            skillLevel: "Master",
            category: "Role",
            damage: false,
            flavor: false,
            impact: "In their place, the Knight can choose to be the recipient of any incoming damage of an At Close Range creature. This damage cannot be mitigated in any way.",
            favorite: false
        },
        {
            name: "Heavenfall",
            action: "Muscle",
            skillLevel: "Basic",
            category: "Source",
            damage: 2,
            flavor: false,
            impact: "Your target is a creature at least 10ft tall, or 15ft long/wide. Deal 2X.",
            favorite: false
        },
        {
            name: "Prayer of Whispers",
            action: "Evaluate",
            skillLevel: "Basic",
            category: "Source",
            damage: false,
            flavor: "Celestial pathways traverse your mind, sometimes inspiring surreal insight.",
            impact: "Out of Danger, you are using any Evaluate skill. Odds/Evens: Ask an additional question.",
            additionalImpact: "In Danger. The first Action that you take in a fight may be preceded by one free question from the Evaluate list.",
            favorite: false
        }
    ]
}


module.exports = sampleChoicesRevised
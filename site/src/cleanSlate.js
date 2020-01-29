const cleanSlate = {
    editing: true,
    level: 1,
    hitpoints: 20,
    damage: 4,
    intersection: {
        title: false,
        traits: []
    },
    name: false,
    source: {
        title: false,
        traits: []
    },
    role: {
        title: false,
        traits: []
    },
    skills: {
        basic: {
            title: "Basic",
            moves: []
        },
        advanced: {
            title: "Advanced", 
            moves: []
        },
        master: {
            title: "Master",
            moves: []
        }
    }
}


module.exports = cleanSlate
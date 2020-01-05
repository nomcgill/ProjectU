const initialState = {
    intersection: "Paladin",
    level: 1,
    name: "Kaira",
    source: {
        title: "Divine",
        traits: {
            name: "Description",
            active: false,
            description: "Your power is granted from on high. Gods and Angels provide you abilities most mortals can only dream of."
        }
    },
    role: {
        title: "Knight",
        traits: {
            Truth: {
                name: "Truth",
                active: false,
                description: "For purposes of penalties, no crafted weapon is considered unnatural to the Knight. Improvised Object penalties remain unaffected."
            }
        }
    },
    skills: {
        basic: {
            title: "Basic",
            moves: {
                Divine: [
                    {
                        name: "Prayer of Reconciliation",
                        active: true,
                        description: "Implore your deity to mend a broken relationship. On a complete success, restore a relationship that you have used Burn a Bridge on."
                    }
                ],
                Knight: [
                    {
                        name: "Temperance",
                        active: false,
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
                        active: true,
                        description: "Implore your deity to mend a broken relationship. On a complete success, restore a relationship that you have used Burn a Bridge on."
                    }
                ],
                Knight: [ 
                    {
                        name: "Temperance",
                        active: false,
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
                        active: true,
                        description: "Implore your deity to mend a broken relationship. On a complete success, restore a relationship that you have used Burn a Bridge on."
                    }
                ],
                Knight: [ 
                    {
                        name: "Temperance",
                        active: false,
                        description: "You are attempting to ride a non-aggressive, mountable creature. Gain the Upper Hand."
                    }
                ]
            }
        }
    }
}

module.exports = {data:sample}
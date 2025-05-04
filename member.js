function skillsMember(){
    return {
        name: "skillsMember",
        description: "Skills Member",
        type: "object",
        properties: {
            id: {
                type: "string",
                description: "The ID of the member.",
                example: "123456789012345678"
            },
            name: {
                type: "string",
                description: "The name of the member.",
                example: "John Doe"
            },
            skills: {
                type: "array",
                items: {
                    type: "string"
                },
                description: "The skills of the member.",
                example: ["JavaScript", "Python", "Java"]
            }
        }
    };
}
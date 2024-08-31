 const createTokenUsers = (user) => {
    return {
        name: user.name,
        userId: user._id,
        role: user.role,
        email: user.email,
        organizer: user.organizer
    }
}

 const createTokenParticipant = (participant) => {
    return {
        lasName: participant.lasName,
        participantId: participant._id,
        firstName: participant.firstName,
        email: participant.email
    }
}

export { createTokenUsers, createTokenParticipant }
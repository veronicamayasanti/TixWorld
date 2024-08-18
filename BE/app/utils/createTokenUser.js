export const createTokenUsers = (user) => {
    return {
        name: user.name,
        userId: user._id,
        role: user.role,
        email: user.email,
        organizer: user.organizer
    }
}

export default createTokenUsers
export const updateTitle = (id, title) => {
    return { type: 'UPDATE_TITLE', payload: { id, title }}
}
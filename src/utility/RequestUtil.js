export const createAuthHeader = () => {
    const header = {
        "Authorization": `Bearer ${localStorage.getItem("user-token")}`,
    }
    return header;
}
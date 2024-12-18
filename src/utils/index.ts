export const getHumanReadableDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
}
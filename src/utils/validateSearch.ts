export function validateSearch(value: string) {
    let error;
    if (value === "") {
        error = "This field is required";
    }
    return error;
}
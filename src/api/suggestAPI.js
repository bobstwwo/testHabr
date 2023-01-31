export default async function useSuggest(suggestValue) {
    const endpoint = "https://habr.com/kek/v2/publication/suggest-mention?q=";

    const result = {
        data: null,
        isError: false,
        errorText: ''
    };

    const response = await fetch(endpoint + suggestValue);

    if (response.ok) {
        const json = await response.json();
        result.data = json.data;
    } else {
        const json = await response.json();
        result.isError = true;
        result.errorText = json.message;
    }

    return result;
}
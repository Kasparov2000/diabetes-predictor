const baseURL = process.env.NEXT_PUBLIC_API_URL

export const post = async (url, data) => {
    const response = await fetch(baseURL.concat(url), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log({response})
    return await response.json();
};

export const get = async (url) => {
    const response = await fetch(baseURL.concat(url));
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};

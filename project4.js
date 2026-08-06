// Asynchronous function
async function fetchData() {
    try {
        console.log("Fetching data...");

        // Simulate network latency (2 seconds)
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data fetched successfully");
            }, 2000);
        });

        console.log("Data received.");
        return result;

    } catch (error) {
        console.log("Error:", error);
    }
}

// Call the function
fetchData().then((message) => {
    console.log(message);
});
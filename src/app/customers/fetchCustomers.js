// src/app/customers/fetchCustomers.js
const fetchCustomers = async () => {
  console.log("API_ENDPOINT in fetchCustomers:", process.env.NEXT_PUBLIC_API_ENDPOINT);

  const apiUrl = new URL("/allcustomers", process.env.NEXT_PUBLIC_API_ENDPOINT);
  console.log("Fetching from:", apiUrl.toString());

  const res = await fetch(apiUrl.toString(), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  console.log("res.status:", res.status);
  const json = await res.json();
  console.log("API result:", json);

  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }

  return json;
};

export default fetchCustomers;
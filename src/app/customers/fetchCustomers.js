// app/customers/fetchCustomers.js

const fetchCustomers = async () => {
  const apiUrl = new URL("/customers", process.env.NEXT_PUBLIC_API_ENDPOINT);

  const res = await fetch(apiUrl.toString(), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }

  return res.json();
};

export default fetchCustomers;
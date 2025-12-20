interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const formSubmit = async (formData: ContactFormData) => {
  const url = process.env.NEXT_PUBLIC_API_KEY;
  console.log("API URL:", url);
  try {
    const response = await fetch(url as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    return data;
  } catch (error) {
    throw error;
  }
};

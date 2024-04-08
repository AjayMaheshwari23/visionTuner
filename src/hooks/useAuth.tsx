const useAuth = async (userId: string) => {
  try {
    // Append userId as a query parameter to the URL
    const url = `/api/auth?userId=${userId}`;

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, requestOptions);
    const res = await response.json();
    // console.log(res);

    return res; 
  } catch (error) {
    console.log(error);
    return null; // Return null or handle the error as needed
  }
};

export default useAuth;
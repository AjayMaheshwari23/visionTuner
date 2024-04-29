const useAuth = async (userId: string) => {
  try {

    const url = `/api/auth?userId=${userId}`;

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, requestOptions);
    const res = await response.json();

    return res; 
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default useAuth;

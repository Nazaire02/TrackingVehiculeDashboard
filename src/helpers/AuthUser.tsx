// eslint-disable-next-line react-refresh/only-export-components
const GetAuth = async (): Promise<any | null> => {
  try {
    const userString = localStorage.getItem("userData");

    if (userString) {
      const user: any = await JSON.parse(userString);
      return user;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des données d'authentification:", error);
  }

  return null;
};

// eslint-disable-next-line react-refresh/only-export-components
const SetAuth = async (data: any) => {
  try {
    const userString = JSON.stringify(data);
    localStorage.setItem("userData", userString);
  } catch (error) {
    console.error("Erreur lors du stockage des données d'authentification:", error);
  }
};

// eslint-disable-next-line react-refresh/only-export-components
const RemoveAuth = async () => {
  try {
    const userString = localStorage.getItem("userData")
    if(userString) { 
      localStorage.removeItem("userData");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression des données d'authentification:", error);
  }
};

export default {
	GetAuth,
	SetAuth,
	RemoveAuth
}
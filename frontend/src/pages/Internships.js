import { useState, useEffect } from "react";
import InternshipList from "../components/Internships/InternshipList";
import SearchBar from "../components/SearchBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../util/Firebase";

function Internships() {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const internshipsCollectionRef = collection(db, "internships");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(internshipsCollectionRef);
      setInternships(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  //const [loadedInternships, setLoadedInternships] = useState([]);

  // const fetchInternshipsHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://internbee-db-default-rtdb.firebaseio.com/internships.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Somethin went wrong!");
  //     }

  //     const data = await response.json();

  //     const loadedInternships = [];

  //     for (const key in data) {
  //       loadedInternships.push({
  //         id: key,
  //         ...data[key],
  //       });
  //     }
  //     setInternships(loadedInternships);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchInternshipsHandler();
  // }, [fetchInternshipsHandler]);

  let content = <p>Found no internships.</p>;

  if (internships.length > 0) {
    content = <InternshipList internships={internships} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <section>
      <SearchBar />
      <h1>All Internships</h1>
      <section>{content}</section>
    </section>
  );
}

export default Internships;

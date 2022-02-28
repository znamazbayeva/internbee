import { addDoc, collection } from "firebase/firestore";
//import { useNavigate } from "react-router-dom";
import NewInternshipForm from "../components/Internships/NewInternshipForm";
import { db } from "../util/Firebase";

function NewInternshipPage() {
  //const history = useNavigate();

  // async function addInternshipHandler(internshipData) {
  //   const response = await fetch(
  //     "https://react-app-internships-default-rtdb.firebaseio.com/internships.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(internshipData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // }
  const internshipsCollectionRef = collection(db, "internships");

  const addInternshipHandler = async (internshipData) => {
    await addDoc(internshipsCollectionRef, { ...internshipData });
  };

  return <NewInternshipForm onAddInternship={addInternshipHandler} />;
}

export default NewInternshipPage;

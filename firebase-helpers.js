// Firebase Helper Functions for Pet Adoption Site
// Import these functions in your script.js or other files as needed

/**
 * Example: Add a new pet to Firestore
 * @param {Object} petData - Pet information
 */
export async function addPet(petData) {
  const { db } = window.firebase;
  const { collection, addDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
  
  try {
    const docRef = await addDoc(collection(db, "pets"), {
      ...petData,
      createdAt: new Date().toISOString()
    });
    console.log("Pet added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding pet: ", error);
    throw error;
  }
}

/**
 * Example: Get all pets from Firestore
 */
export async function getAllPets() {
  const { db } = window.firebase;
  const { collection, getDocs } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
  
  try {
    const querySnapshot = await getDocs(collection(db, "pets"));
    const pets = [];
    querySnapshot.forEach((doc) => {
      pets.push({ id: doc.id, ...doc.data() });
    });
    return pets;
  } catch (error) {
    console.error("Error getting pets: ", error);
    throw error;
  }
}

/**
 * Example: Submit an adoption application
 * @param {Object} applicationData - Adoption application info
 */
export async function submitAdoptionApplication(applicationData) {
  const { db } = window.firebase;
  const { collection, addDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
  
  try {
    const docRef = await addDoc(collection(db, "applications"), {
      ...applicationData,
      status: "pending",
      submittedAt: new Date().toISOString()
    });
    console.log("Application submitted with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error submitting application: ", error);
    throw error;
  }
}

/**
 * Example: Upload pet image to Firebase Storage
 * @param {File} file - Image file
 * @param {string} petId - Pet ID
 */
export async function uploadPetImage(file, petId) {
  const { storage } = window.firebase;
  const { ref, uploadBytes, getDownloadURL } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js');
  
  try {
    const storageRef = ref(storage, `pets/${petId}/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log("Image uploaded successfully!");
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image: ", error);
    throw error;
  }
}

/**
 * Example: Sign up a new user
 * @param {string} email - User email
 * @param {string} password - User password
 */
export async function signUpUser(email, password) {
  const { auth } = window.firebase;
  const { createUserWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js');
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up: ", error);
    throw error;
  }
}

/**
 * Example: Sign in an existing user
 * @param {string} email - User email
 * @param {string} password - User password
 */
export async function signInUser(email, password) {
  const { auth } = window.firebase;
  const { signInWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js');
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in: ", error);
    throw error;
  }
}

/**
 * Example: Sign out the current user
 */
export async function signOutUser() {
  const { auth } = window.firebase;
  const { signOut } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js');
  
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
}

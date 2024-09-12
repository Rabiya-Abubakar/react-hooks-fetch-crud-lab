const API_URL = 'http://localhost:4000/questions';

// Fetch all questions
export const fetchQuestions = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching questions:', error);
    return []; // Return an empty array on error
  }
};

// Add a new question
export const addQuestion = async (newQuestion) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newQuestion),
      });
      if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
      return await response.json();
    } catch (error) {
      console.error('Error adding question:', error);
      return null; // Return null on error
    }
  };

// Delete a question
export const deleteQuestion = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
    return true; // Indicate success
  } catch (error) {
    console.error('Error deleting question:', error);
    return false; // Indicate failure
  }
};

// Update an existing question
export const updateQuestion = async (id, updatedQuestion) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedQuestion),
    });
    if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Error updating question:', error);
    return null; // Return null on error
  }
};

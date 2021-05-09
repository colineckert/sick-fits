import { useState } from 'react';

// {
//   name: 'colin',
//   description: 'nice shoes',
//   price: 100
// }

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') value = parseInt(value);
    if (type === 'file') value[0] = e.target.files;

    setInputs({
      // copy the existing state
      ...inputs,
      // dynamically assign values based on input field
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return the things we want to surface from custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}

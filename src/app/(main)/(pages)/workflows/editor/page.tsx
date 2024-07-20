import React from 'react'

type Props = {}

const Page = (props: Props) => {
  //CHALLENGE: If the user tries to access this route you should send them to their first workflow they have or create one or you can have your own behavior.
  return <div>Page</div>
}

export default Page

// import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// // Mock function to get user workflows, replace with your actual API call
// const fetchUserWorkflows = async () => {
//   // Replace this with your actual logic to fetch workflows
//   return [
//     // Example workflows
//     { id: 'workflow1', name: 'First Workflow' },
//     { id: 'workflow2', name: 'Second Workflow' },
//   ];
// };

// type Props = {};

// const Page = (props: Props) => {
//   const history = useHistory();

//   useEffect(() => {
//     const checkWorkflows = async () => {
//       const workflows = await fetchUserWorkflows();
//       if (workflows.length > 0) {
//         // Redirect to the first workflow
//         history.push(`/workflows/${workflows[0].id}`);
//       } else {
//         // Redirect to create a new workflow page
//         history.push('/workflows/create');
//       }
//     };

//     checkWorkflows();
//   }, [history]);

//   return <div>Loading...</div>;
// };

// export default Page;

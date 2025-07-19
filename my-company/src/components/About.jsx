function About () {
  return (
    <div style={{
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '10px', 
        textAlign: 'center', 
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h1>About This App</h1>
      <p>
        This app is a simple demonstration of a React application that uses
        React Router for navigation. It showcases how to create components and
        manage routes in a React application.
      </p>
      <p>
        You can navigate through different pages using the links provided in the
        navigation bar.
      </p>
    </div>
  );
}

export default About;
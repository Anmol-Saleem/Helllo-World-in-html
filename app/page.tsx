import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px', background: '#f0f0f0' }}>
      <Image 
        src="/anmol-avatar.png" 
        alt="Anmol Saleem"
        width={150}
        height={150}
      />
      <h1 style={{ marginTop: '10px', color: '#0070f3', fontSize: '3rem' }}>Anmol Saleem</h1>
      <p style={{ color: '#555' }}>GIAIC Student</p>
      <p style={{ marginTop: '20px', fontSize: '1rem', color: '#333', textAlign: 'left', display: 'inline-block' }}>
        My Sunday class teachers are:
        <br />
        <br />
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li>1. Muhammad Anas</li>
          <li>2. Ubaid ur Rehman</li>
          <li>3. Ahmer Arman</li>
          <li>4. Miss Madiha</li>
          <li>5. Muhammad Humza</li>
          <br />
             My first assignment of "Hello World" is completed
        </ul>
      </p>
    </div>
  );
}

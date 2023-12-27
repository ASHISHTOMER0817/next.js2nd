export default function UserProfile({params}: any) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1>Profile </h1>
      <br></br>
      <p className="text-4xl">Profile Page </p>
      <span> this is our ID:{params.id}</span>
    </div>
  );
}

export default function Page({ params }: { params: { projectId: string } }) {
  return <div>My Post: {params.projectId}</div>;
}

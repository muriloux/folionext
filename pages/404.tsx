export default function NotFound() {
  return (
    <>
      <div className="container flex flex-col justify-center items-center pt-5">
        <h1 className="font-bold text-slate-900">Not found 404</h1>
        <h2 className="pb-10 text-slate-500">What happened?</h2>
        <video autoPlay={true} loop muted width={500} height={500}>
          <source src="/where.mp4" />
        </video>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      is404: true,
    },
  };
}

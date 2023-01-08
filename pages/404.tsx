import { GetStaticProps } from "next";

export default function NotFound() {
  return (
    <>
      <div className="container flex flex-col min-h-screen justify-center items-center pt-5">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-slate-900">
          Not found 404
        </h1>
        <h2 className="pb-10 text-xl sm:text-2xl md:text-3xl text-slate-500">
          What happened?
        </h2>
        <div className="flex overflow-y-hidden justify-center items-center content-center">
          <video autoPlay={true} loop muted width={500} height={500}>
            <source src="/where.mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      is404: true,
    },
  };
};

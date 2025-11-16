import { CareersContent } from "@/components/careers";
import { getVagas } from "@/lib/vagas";



export const metadata = {
  title: "Delicia",
  description: "delicia",
  author: "",
  icons: {
    icon: "/",
  },
};
;


  const CareersPage = async () => {
  const vagas = (await getVagas()) || [];
  
    return (
      <section className="all-content">
        <main className="content-page">
          <CareersContent vagas={vagas} />
        </main>
      </section>
    );
  }
  
  export default CareersPage;
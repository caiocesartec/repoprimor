import { SectionAbout } from "@/components/homepage/section-about";
import { SectionBanner } from "@/components/homepage/section-banner";
import { SectionEquipe } from "@/components/homepage/section-equipe";
import { SectionFiliais } from "@/components/homepage/section-filiais";
import { SectionNews } from "@/components/homepage/section-news";
import { SectionPracticeAreas } from "@/components/homepage/section-pratices-areas";
import { getFiliais } from "@/lib/filiais";
import { getNovidades } from "@/lib/novidades";

export const metadata = {
  title: "Delicia",
  description: "delicia",
  author: "",
  icons: {
    icon: "/",
  },
};
;


const HomePage = async () => {
  const novidades = []
  const filiais = await getFiliais();

  return (
    <section className="all-content">
      <main className="content-pagee">
        <SectionBanner />
        <SectionNews novidades={novidades} />
        <SectionAbout />
        <SectionPracticeAreas />
        <SectionFiliais filiais={filiais} />
        <SectionEquipe />
      </main>
    </section>
  );
};

export default HomePage;

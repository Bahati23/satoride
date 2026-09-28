import { useSeoMeta } from "@unhead/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/satoride/SiteHeader";
import { SiteFooter } from "@/components/satoride/SiteFooter";
import { useTranslation } from "@/lib/i18n";

const NotFound = () => {
  const { t } = useTranslation();

  useSeoMeta({
    title: t('seo.nf.title'),
    description: t('seo.nf.desc'),
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="container flex flex-1 items-center justify-center py-16">
        <div className="space-y-5 text-center">
          <p className="font-display text-7xl font-extrabold text-primary">404</p>
          <h1 className="font-display text-2xl font-bold">{t('nf.title')}</h1>
          <p className="text-muted-foreground mx-auto max-w-sm">{t('nf.desc')}</p>
          <Button asChild className="gap-2 rounded-full">
            <Link to="/">
              <ArrowLeft className="size-4" aria-hidden />
              {t('nf.back')}
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default NotFound;

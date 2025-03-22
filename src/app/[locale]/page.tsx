export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale ?? "es";

  return <div>Idioma actual: {locale}</div>;
}

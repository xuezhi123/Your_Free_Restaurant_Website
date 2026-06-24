interface WeeklyMenuProps {
  titleNl?: string;
  textNl?: string;
}

export default function WeeklyMenu({ titleNl, textNl }: WeeklyMenuProps) {
  return (
    <section id="menu" className="bg-white pt-0 pb-[var(--section-pb)] px-6">
      <div className="mx-auto max-w-container text-center">
        <h2 className="mb-8 font-serif text-3xl tracking-wide text-gray-900">
          {titleNl || "MENU"}
        </h2>
        {textNl && (
          <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
            {textNl}
          </p>
        )}
      </div>
    </section>
  );
}

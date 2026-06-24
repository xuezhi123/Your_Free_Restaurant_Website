interface ContactSectionProps {
  title?: string;
  phone?: string;
  email?: string;
  address?: string;
  googleMapsUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  openingHours?: string;
}

export default function ContactSection({
  title,
  phone,
  email,
  address,
  googleMapsUrl,
  facebookUrl,
  instagramUrl,
  openingHours,
}: ContactSectionProps) {
  return (
    <section id="contact" className="bg-white pt-0 pb-[80px] px-6">
      <div className="mx-auto max-w-container text-center">
        <h2 className="mb-8 font-serif text-3xl tracking-wide text-gray-900">
          {title || "Praktische Info"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
          {/* Left — address, phone, email, social */}
          <div className="space-y-3 mx-auto w-fit">
            {address && (
              <p className="text-sm text-gray-700">
                <span className="inline-block w-6">📍</span>
                {googleMapsUrl ? (
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 hover:underline"
                  >
                    {address}
                  </a>
                ) : (
                  address
                )}
              </p>
            )}
            {phone && (
              <p className="text-sm text-gray-700">
                <span className="inline-block w-6">📞</span>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="hover:text-red-600 hover:underline"
                >
                  {phone}
                </a>
              </p>
            )}
            {email && (
              <p className="text-sm text-gray-700">
                <span className="inline-block w-6">✉️</span>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-red-600 hover:underline"
                >
                  {email}
                </a>
              </p>
            )}
            <p className="text-sm text-gray-700">
              <span className="inline-block w-6">📱</span>
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 hover:underline"
                >
                  Facebook
                </a>
              )}
              {facebookUrl && instagramUrl && <span> &amp; </span>}
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 hover:underline"
                >
                  Instagram
                </a>
              )}
            </p>
          </div>

          {/* Right — opening hours */}
          <div className="space-y-1 mx-auto w-fit">
            {openingHours && openingHours.split("\n").filter(Boolean).map((line, i) => {
            const m = line.match(/^(.+?)\s+(.+)$/);
            if (m) {
              return (
                <p key={i} className="text-sm text-gray-700 flex">
                  <span className="w-[45px] shrink-0">{m[1]}</span>
                  <span className="tabular-nums">{m[2]}</span>
                </p>
              );
            }
            return <p key={i} className="text-sm text-gray-700">{line}</p>;
          })}
          </div>
        </div>
      </div>
    </section>
  );
}

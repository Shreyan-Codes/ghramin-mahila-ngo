/**
 * Renders a schema.org JSON-LD document.
 *
 * `<` is escaped to its unicode form so a stray HTML tag inside translated
 * content cannot break out of the script element.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

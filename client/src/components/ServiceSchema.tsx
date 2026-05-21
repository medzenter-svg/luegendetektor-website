/**
 * ServiceSchema – Injiziert ein JSON-LD Service-Schema in den <head>.
 *
 * Verwendung:
 *   <ServiceSchema
 *     name="Treuetest – Polygraphuntersuchung"
 *     description="Professioneller Treuetest mit dem Polygraphen..."
 *     url="/treuetest"
 *     serviceType="Treuetest"
 *     areaServed={["München", "Deutschland"]}
 *   />
 */
import { useEffect } from "react";

const BASE_URL = "https://luegendetektor-test-muenchen.de";
const PROVIDER = {
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#business`,
  "name": "Lügendetektor Test München – Polygraph Untersuchungen",
  "url": BASE_URL,
  "telephone": "+4917560360003",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Marienstr. 4",
    "addressLocality": "München",
    "postalCode": "80331",
    "addressCountry": "DE",
  },
};

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
  offers?: {
    price?: string;
    priceCurrency?: string;
    priceRange?: string;
    description?: string;
  };
}

export default function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = ["München", "Deutschland"],
  offers,
}: ServiceSchemaProps) {
  useEffect(() => {
    const schemaId = `schema-service-${url.replace(/\//g, "-")}`;
    document.getElementById(schemaId)?.remove();

    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${BASE_URL}${url}#service`,
      "name": name,
      "description": description,
      "url": `${BASE_URL}${url}`,
      "serviceType": serviceType,
      "provider": PROVIDER,
      "areaServed": areaServed.map((area) => ({
        "@type": area.length <= 3 ? "Country" : "City",
        "name": area,
      })),
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `${BASE_URL}${url}`,
        "servicePhone": "+4917560360003",
        "availableLanguage": [
          { "@type": "Language", "name": "German" },
          { "@type": "Language", "name": "English" },
        ],
      },
      "termsOfService": `${BASE_URL}/#contact`,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Polygraph-Dienstleistungen",
        "url": `${BASE_URL}/#preise`,
      },
    };

    if (offers) {
      schema["offers"] = {
        "@type": "Offer",
        ...(offers.price ? { "price": offers.price } : {}),
        ...(offers.priceCurrency ? { "priceCurrency": offers.priceCurrency } : { "priceCurrency": "EUR" }),
        ...(offers.priceRange ? { "priceRange": offers.priceRange } : {}),
        ...(offers.description ? { "description": offers.description } : {}),
        "seller": PROVIDER,
      };
    }

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [url, name, description, serviceType]);

  return null;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurants | Rich Zou",
};

const cities = [
  {
    city: "New York",
    tagline: "go to East Broadway, skip Canal Street",
    restaurants: [
      { name: "QQ Cafe", address: "67 East Broadway", note: "my mom's restaurant" },
      { name: "Seng Seafood Restaurant", address: "39 East Broadway 2nd FL", note: "dim sum" },
      { name: "Jufu Garden Restaurant", address: "68 East Broadway", note: null },
      { name: "M Star Cafe", address: "19 Division St", note: null },
      { name: "Golden Unicorn", address: "18 East Broadway", note: "dim sum" },
      { name: "M&W Bakery", address: "25 East Broadway", note: null },
    ],
  },
  {
    city: "San Francisco",
    tagline: null,
    restaurants: [
      { name: "Yee's Restaurant", address: "1131 Grant Ave", note: "roast duck" },
      { name: "Ma's Dim Sum & Cafe", address: "1315 Powell St", note: "clay pot" },
      { name: "Yin Du Wonton Noodle", address: "648 Pacific Ave", note: null },
      { name: "New Regent Cafe", address: "638 Pacific Ave", note: null },
      { name: "Yummy Bakery & Cafe", address: "607 Jackson St", note: null },
      { name: "Begoni Bistro", address: "615 Jackson St", note: null },
      { name: "Spicy King", address: "65 Waverly Pl", note: null },
    ],
  },
  {
    city: "Boston",
    tagline: null,
    restaurants: [
      { name: "New Wings Kitchen", address: "3 Hudson St", note: "underground, the one I always took people to" },
      { name: "Empire Garden Restaurant", address: "690 Washington St", note: "dim sum" },
      { name: "Clay Pot Cafe", address: "74 Kneeland St", note: null },
      { name: "Penang Malaysian Cuisine", address: "685 Washington St", note: null },
    ],
  },
];

export default function RestaurantsPage() {
  return (
    <div className="pt-32 pb-16 px-6 md:px-10">
      <div className="max-w-[800px]">
        <div className="space-y-12">
          {cities.map((section) => (
            <div key={section.city}>
              <div className="space-y-1 mb-6">
                <h2 className="font-timeline-entry text-primary-text leading-relaxed font-medium">
                  {section.city}
                </h2>
                {section.tagline && (
                  <p className="font-timeline-entry text-muted-foreground leading-relaxed italic">
                    {section.tagline}
                  </p>
                )}
              </div>
              <div className="space-y-3">
                {section.restaurants.map((r) => (
                  <div
                    key={r.name}
                    className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-4"
                  >
                    <div className="font-timeline-entry text-primary-text leading-relaxed">
                      {r.name}
                    </div>
                    <div className="font-timeline-entry text-muted-foreground leading-relaxed">
                      {r.address}
                      {r.note && (
                        <span className="ml-2 italic">— {r.note}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

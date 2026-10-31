export const CAFE = {
  name: "BrewNest Café",
  tagline: "Your Everyday Escape, One Cup at a Time.",
  address: "123 Coffee Street, Surat, Gujarat, India",
  phoneDisplay: "+91 98765 43210",
  phoneLink: "+919876543210",
  email: "hello@brewnest.example",
  hours: "9:00 AM – 10:00 PM",
  openHour: 9,
  closeHour: 22,
  whatsappNumber: "919876543210",
  whatsappMessage: "Hello BrewNest Café! I would like to know more about your menu.",
};

// WhatsApp click-to-chat link with the pre-filled message
export const WHATSAPP_URL = `https://wa.me/${CAFE.whatsappNumber}?text=${encodeURIComponent(
  CAFE.whatsappMessage
)}`;

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// Unsplash image helper (free to use). Change the photo ID to swap any image.
export const unsplash = (photoId, width = 900) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;

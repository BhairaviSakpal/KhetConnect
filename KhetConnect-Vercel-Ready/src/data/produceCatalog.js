// Central catalog so KhetConnect isn't limited to just grains/vegetables.
// Each entry has an emoji + gradient used for card visuals (no external images = no broken links).
export const PRODUCE_CATALOG = [
  { name: "Wheat", category: "Grain", emoji: "🌾", gradient: "linear-gradient(135deg,#F4E5B2,#D9B45B)" },
  { name: "Rice", category: "Grain", emoji: "🌾", gradient: "linear-gradient(135deg,#F5F0DC,#E8DCA8)" },
  { name: "Maize", category: "Grain", emoji: "🌽", gradient: "linear-gradient(135deg,#FFE9A8,#F5C542)" },
  { name: "Onion", category: "Vegetable", emoji: "🧅", gradient: "linear-gradient(135deg,#F6D6E0,#D98CAE)" },
  { name: "Tomato", category: "Vegetable", emoji: "🍅", gradient: "linear-gradient(135deg,#FFB4A8,#E74C3C)" },
  { name: "Potato", category: "Vegetable", emoji: "🥔", gradient: "linear-gradient(135deg,#E8D5B7,#C89F6E)" },
  { name: "Brinjal", category: "Vegetable", emoji: "🍆", gradient: "linear-gradient(135deg,#D3B4E0,#7D4E9E)" },
  { name: "Cabbage", category: "Vegetable", emoji: "🥬", gradient: "linear-gradient(135deg,#D4EDC9,#8FC96C)" },
  { name: "Carrot", category: "Vegetable", emoji: "🥕", gradient: "linear-gradient(135deg,#FFD8A8,#F0952E)" },
  { name: "Mango", category: "Fruit", emoji: "🥭", gradient: "linear-gradient(135deg,#FFE08A,#F5A623)" },
  { name: "Banana", category: "Fruit", emoji: "🍌", gradient: "linear-gradient(135deg,#FFF3A0,#F5D033)" },
  { name: "Grapes", category: "Fruit", emoji: "🍇", gradient: "linear-gradient(135deg,#D9B8E8,#8E5FA8)" },
  { name: "Pomegranate", category: "Fruit", emoji: "🍎", gradient: "linear-gradient(135deg,#FFB3B3,#C0392B)" },
  { name: "Orange", category: "Fruit", emoji: "🍊", gradient: "linear-gradient(135deg,#FFCB8E,#F5822E)" },
  { name: "Marigold", category: "Flower", emoji: "🌼", gradient: "linear-gradient(135deg,#FFECA8,#F5B942)" },
  { name: "Rose", category: "Flower", emoji: "🌹", gradient: "linear-gradient(135deg,#FFC2D1,#D63864)" },
  { name: "Jasmine", category: "Flower", emoji: "🤍", gradient: "linear-gradient(135deg,#F5F5F0,#DDE8D8)" },
  { name: "Chrysanthemum", category: "Flower", emoji: "🌻", gradient: "linear-gradient(135deg,#FFE9A0,#F0B429)" },
  { name: "Honey", category: "Honey", emoji: "🍯", gradient: "linear-gradient(135deg,#FFD873,#E8A317)" },
  { name: "Milk", category: "Dairy", emoji: "🥛", gradient: "linear-gradient(135deg,#FFFFFF,#E4E5DE)" },
  { name: "Paneer", category: "Dairy", emoji: "🧀", gradient: "linear-gradient(135deg,#FFF3C4,#F5D95A)" },
  { name: "Ghee", category: "Dairy", emoji: "🧈", gradient: "linear-gradient(135deg,#FFE9A0,#F0B429)" },
  { name: "Turmeric", category: "Spice", emoji: "🟡", gradient: "linear-gradient(135deg,#FFD24C,#E8930C)" },
  { name: "Chilli", category: "Spice", emoji: "🌶️", gradient: "linear-gradient(135deg,#FF8A80,#C0392B)" },
  { name: "Coriander", category: "Spice", emoji: "🌿", gradient: "linear-gradient(135deg,#D4EDC9,#6BA84F)" },
  { name: "Eggs", category: "Poultry", emoji: "🥚", gradient: "linear-gradient(135deg,#FFF8E7,#F0DCA0)" },
  { name: "Cotton", category: "Cash Crop", emoji: "☁️", gradient: "linear-gradient(135deg,#FFFFFF,#DDE8D8)" },
  { name: "Sugarcane", category: "Cash Crop", emoji: "🎋", gradient: "linear-gradient(135deg,#D4EDC9,#8FC96C)" },
];

export const PRODUCE_NAMES = PRODUCE_CATALOG.map((p) => p.name);

export function getProduceVisual(name) {
  const found = PRODUCE_CATALOG.find((p) => p.name.toLowerCase() === (name || "").toLowerCase());
  return found || { emoji: "🌱", gradient: "linear-gradient(135deg,#D4EDC9,#8FC96C)" };
}

// Broad region list spanning multiple Indian states/cities, not just a handful of
// Maharashtra towns - farmers and buyers across India should find their own region.
export const REGIONS = [
  "Nashik", "Pune", "Mumbai", "Nagpur", "Aurangabad", "Kolhapur", "Amravati",
  "Ahmedabad", "Surat", "Vadodara", "Rajkot",
  "Jaipur", "Jodhpur", "Udaipur",
  "Lucknow", "Kanpur", "Varanasi", "Agra",
  "Bengaluru", "Mysuru", "Hubballi",
  "Chennai", "Coimbatore", "Madurai",
  "Hyderabad", "Warangal",
  "Bhopal", "Indore", "Jabalpur",
  "Patna", "Gaya",
  "Chandigarh", "Ludhiana", "Amritsar",
  "Kolkata", "Siliguri",
  "Guwahati", "Shillong",
  "Kochi", "Thiruvananthapuram",
  "Bhubaneswar", "Cuttack",
  "Ranchi", "Jamshedpur",
  "Dehradun", "Shimla",
];

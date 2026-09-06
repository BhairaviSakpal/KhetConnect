const KEY = 'kc_frontend_demo_v5';

export const USERS = [
  { id: 'F101', role: 'FARMER', name: 'Suresh Patil', email: 'suresh@khetconnect.demo', phone: '+91 98765 41001', region: 'Nashik, Maharashtra', joined: '12 Jan 2026', rating: 4.8, reviews: 38, kyc: 'Verified', badges: ['KYC Verified', 'FPO Member', 'Soil Health Card'], farm: '18 acres • Onion, Grapes, Tomato', bio: 'Third-generation farmer focused on traceable, quality produce.' },
  { id: 'F102', role: 'FARMER', name: 'Meena Jadhav', email: 'meena@khetconnect.demo', phone: '+91 98220 12002', region: 'Pune, Maharashtra', joined: '05 Feb 2026', rating: 4.7, reviews: 21, kyc: 'Verified', badges: ['KYC Verified', 'Natural Farming'], farm: '11 acres • Tomato, Vegetables', bio: 'Supplies fresh produce to restaurants and city buyers.' },
  { id: 'F103', role: 'FARMER', name: 'Anil Sawant', email: 'anil@khetconnect.demo', phone: '+91 98900 33003', region: 'Ratnagiri, Maharashtra', joined: '21 Feb 2026', rating: 4.9, reviews: 57, kyc: 'Verified', badges: ['KYC Verified', 'GI Region', 'FPO Verified'], farm: '14 acres • Alphonso Mango', bio: 'Premium orchard farmer with seasonal direct-to-buyer supply.' },
  { id: 'D201', role: 'TRUCK_DRIVER', name: 'Ramesh Yadav', email: 'ramesh@khetconnect.demo', phone: '+91 98111 22001', region: 'Nashik, Maharashtra', joined: '19 Jan 2026', rating: 4.9, reviews: 46, kyc: 'Verified', badges: ['DL Verified', 'Vehicle RC Verified', 'Insurance Active'], vehicle: 'Tata 407 • MH 15 AB 2026 • 2.5T', bio: 'Reliable inter-city produce transporter with cold-chain experience.' },
  { id: 'D202', role: 'TRUCK_DRIVER', name: 'Harpreet Singh', email: 'harpreet@khetconnect.demo', phone: '+91 98765 55002', region: 'Delhi NCR', joined: '02 Mar 2026', rating: 4.8, reviews: 31, kyc: 'Verified', badges: ['DL Verified', 'Vehicle RC Verified'], vehicle: 'Ashok Leyland Dost • DL 01 CD 8812 • 1.5T', bio: 'Delhi NCR route specialist for vegetables and grains.' },
  { id: 'D203', role: 'TRUCK_DRIVER', name: 'Sanjay Kumar', email: 'sanjay@khetconnect.demo', phone: '+91 98480 77003', region: 'Hyderabad, Telangana', joined: '14 Mar 2026', rating: 4.7, reviews: 19, kyc: 'Verified', badges: ['DL Verified', 'Vehicle RC Verified'], vehicle: 'Eicher Pro • TS 09 EF 4432 • 4T', bio: 'South India logistics driver covering Telangana, Karnataka and AP.' },
  { id: 'B301', role: 'BUYER', name: 'Aarav Mehta', email: 'aarav@khetconnect.demo', phone: '+91 98201 44001', region: 'Mumbai, Maharashtra', joined: '09 Feb 2026', rating: 4.6, reviews: 12, kyc: 'Verified', badges: ['KYC Verified', 'Verified Buyer'], buyerType: 'Restaurant procurement', bio: 'Procurement manager sourcing directly from verified farmers.' },
  { id: 'B302', role: 'BUYER', name: 'Priya Shah', email: 'priya@khetconnect.demo', phone: '+91 98980 66002', region: 'Ahmedabad, Gujarat', joined: '11 Mar 2026', rating: 4.8, reviews: 8, kyc: 'Verified', badges: ['KYC Verified', 'Verified Buyer'], buyerType: 'Wholesale buyer', bio: 'Wholesale produce buyer for Gujarat and Rajasthan markets.' },
  { id: 'B303', role: 'BUYER', name: 'Rahul Nair', email: 'rahul@khetconnect.demo', phone: '+91 98470 88003', region: 'Kochi, Kerala', joined: '18 Mar 2026', rating: 4.5, reviews: 6, kyc: 'Verified', badges: ['KYC Verified', 'Verified Buyer'], buyerType: 'Retail chain', bio: 'Retail sourcing team looking for consistent farm supply.' },
];

export const LISTINGS = [
  { id:'C001', cropType:'Onion', quantity:1200, pricePerKg:24, region:'Nashik, Maharashtra', qualityGrade:'A', farmerId:'F101', farmerName:'Suresh Patil', farmerRating:4.8, reviews:38, certifications:['KYC Verified','FPO Member','Soil Health Card'], harvest:'Fresh harvest • 04 Sep 2026', deliveryDays:2, minOrder:100, description:'Firm red onions, sorted and packed for bulk buyers.' },
  { id:'C002', cropType:'Tomato', quantity:650, pricePerKg:31, region:'Pune, Maharashtra', qualityGrade:'A', farmerId:'F102', farmerName:'Meena Jadhav', farmerRating:4.7, reviews:21, certifications:['KYC Verified','Natural Farming'], harvest:'Harvested today', deliveryDays:2, minOrder:50, description:'Fresh hybrid tomatoes suitable for retail and restaurants.' },
  { id:'C003', cropType:'Alphonso Mango', quantity:900, pricePerKg:88, region:'Ratnagiri, Maharashtra', qualityGrade:'A+', farmerId:'F103', farmerName:'Anil Sawant', farmerRating:4.9, reviews:57, certifications:['KYC Verified','GI Region','FPO Verified'], harvest:'Premium seasonal batch', deliveryDays:3, minOrder:50, description:'Grade A+ Alphonso mangoes, orchard packed.' },
  { id:'C004', cropType:'Turmeric', quantity:1000, pricePerKg:112, region:'Erode, Tamil Nadu', qualityGrade:'A', farmerId:'F104', farmerName:'Kavitha R', farmerRating:4.6, reviews:29, certifications:['Organic Certified','APMC Registered'], harvest:'Polished fingers', deliveryDays:4, minOrder:100, description:'High-curcumin turmeric fingers for wholesale buyers.' },
  { id:'C005', cropType:'Rice', quantity:2500, pricePerKg:46, region:'Bardhaman, West Bengal', qualityGrade:'A', farmerId:'F105', farmerName:'Subhajit Mondal', farmerRating:4.7, reviews:44, certifications:['KYC Verified','FPO Member'], harvest:'New season stock', deliveryDays:5, minOrder:250, description:'Cleaned and graded rice for institutional procurement.' },
  { id:'C006', cropType:'Rose', quantity:350, pricePerKg:145, region:'Bengaluru, Karnataka', qualityGrade:'A', farmerId:'F106', farmerName:'Lakshmi Gowda', farmerRating:4.8, reviews:32, certifications:['Floriculture Cooperative'], harvest:'Same-day cut', deliveryDays:2, minOrder:25, description:'Fresh cut roses for florists and event suppliers.' },
  { id:'C007', cropType:'Banana', quantity:1800, pricePerKg:39, region:'Thrissur, Kerala', qualityGrade:'A', farmerId:'F107', farmerName:'Joseph Mathew', farmerRating:4.7, reviews:17, certifications:['KYC Verified','FPO Member'], harvest:'Ready to dispatch', deliveryDays:3, minOrder:100, description:'Fresh Nendran bananas, packed for transport.' },
  { id:'C008', cropType:'Green Chilli', quantity:700, pricePerKg:168, region:'Guntur, Andhra Pradesh', qualityGrade:'A', farmerId:'F108', farmerName:'Lakshmi Devi', farmerRating:4.8, reviews:26, certifications:['KYC Verified','APMC Registered'], harvest:'Harvested 1 day ago', deliveryDays:3, minOrder:50, description:'Bright green chilli with consistent size for wholesale.' },
];

export const DEMAND = [
  ['Onion','Delhi NCR','Very High','₹28–34/kg','North'], ['Tomato','Mumbai & Pune','High','₹34–42/kg','West'], ['Mango','Maharashtra & Gujarat','Very High','₹95–125/kg','West'], ['Rice','West Bengal & Odisha','High','₹48–58/kg','East'], ['Turmeric','Tamil Nadu & Telangana','High','₹118–135/kg','South'], ['Marigold','Karnataka & Telangana','Seasonal High','₹70–95/kg','South'], ['Potato','Uttar Pradesh & Delhi NCR','High','₹24–32/kg','North'], ['Banana','Kerala & Tamil Nadu','High','₹36–48/kg','South'], ['Cotton','Gujarat & Maharashtra','High','₹68–78/kg','West'], ['Wheat','Punjab, Haryana & UP','Stable','₹27–32/kg','North'], ['Chilli','Andhra Pradesh & Telangana','Very High','₹150–210/kg','South'], ['Honey','Pan-India urban markets','Growing','₹280–360/kg','Pan-India'], ['Apple','Delhi, Mumbai & Bengaluru','High','₹120–180/kg','North'], ['Jasmine','Tamil Nadu & Karnataka','Seasonal High','₹160–220/kg','South'], ['Maize','Karnataka & Telangana','High','₹22–29/kg','South'], ['Soybean','Madhya Pradesh & Maharashtra','High','₹48–56/kg','Central/West'], ['Tea','West Bengal & Assam','High','₹190–280/kg','East'], ['Mustard','Rajasthan, Haryana & UP','Stable','₹55–70/kg','North']
].map(([product,region,demand,price,zone])=>({product,region,demand,price,zone}));

const seedOrders = [
  { id:'KC-1042', cropId:'C001', cropType:'Onion', quantity:500, pricePerKg:24, totalAmount:12000, buyerId:'B301', buyerName:'Aarav Mehta', farmerId:'F101', farmerName:'Suresh Patil', origin:'Nashik, Maharashtra', destination:'Mumbai, Maharashtra', estimatedDays:2, transportDays:2, transportWage:2600, escrowStatus:'RELEASED', workflowStatus:'COMPLETED', driverId:'D201', driverName:'Ramesh Yadav', createdAt:'2026-08-28', deliveredAt:'2026-08-30', driverRating:5, farmerRating:5, onTimeRating:5, farmerReview:'Excellent quality, accurate quantity and very clean packing.' },
  { id:'KC-1043', cropId:'C002', cropType:'Tomato', quantity:300, pricePerKg:31, totalAmount:9300, buyerId:'B302', buyerName:'Priya Shah', farmerId:'F102', farmerName:'Meena Jadhav', origin:'Pune, Maharashtra', destination:'Ahmedabad, Gujarat', estimatedDays:3, transportDays:3, transportWage:3100, escrowStatus:'HELD', workflowStatus:'IN_TRANSIT', driverId:'D202', driverName:'Harpreet Singh', createdAt:'2026-09-03', pickedAt:'2026-09-04', driverRating:null, farmerRating:null, onTimeRating:null },
  { id:'KC-1044', cropId:'C003', cropType:'Alphonso Mango', quantity:100, pricePerKg:88, totalAmount:8800, buyerId:'B303', buyerName:'Rahul Nair', farmerId:'F103', farmerName:'Anil Sawant', origin:'Ratnagiri, Maharashtra', destination:'Kochi, Kerala', estimatedDays:4, transportDays:4, transportWage:4200, escrowStatus:'HELD', workflowStatus:'DRIVER_REQUESTED', driverId:null, driverName:null, createdAt:'2026-09-05', driverRating:null, farmerRating:null, onTimeRating:null },
  { id:'KC-1046', cropId:'C001', cropType:'Onion', quantity:250, pricePerKg:24, totalAmount:6000, buyerId:'B301', buyerName:'Aarav Mehta', farmerId:'F101', farmerName:'Suresh Patil', origin:'Nashik, Maharashtra', destination:'Mumbai, Maharashtra', estimatedDays:2, transportDays:2, transportWage:1900, escrowStatus:'HELD', workflowStatus:'DELIVERED', driverId:'D201', driverName:'Ramesh Yadav', createdAt:'2026-09-04', deliveredAt:'2026-09-06', driverRating:null, farmerRating:null, onTimeRating:null },
  { id:'KC-1045', cropId:'C005', cropType:'Rice', quantity:800, pricePerKg:46, totalAmount:36800, buyerId:'B301', buyerName:'Aarav Mehta', farmerId:'F105', farmerName:'Subhajit Mondal', origin:'Bardhaman, West Bengal', destination:'Mumbai, Maharashtra', estimatedDays:5, transportDays:null, transportWage:null, escrowStatus:'HELD', workflowStatus:'FARMER_ACCEPTED', driverId:null, driverName:null, createdAt:'2026-09-06', driverRating:null, farmerRating:null, onTimeRating:null },
];

const seedLoads = [
  { id:'LOAD-701', orderId:'KC-1043', farmerId:'F102', farmerName:'Meena Jadhav', cargo:'Tomato · 300 kg', pickup:'Pune, Maharashtra', drop:'Ahmedabad, Gujarat', days:3, wage:3100, driverId:'D202', driverName:'Harpreet Singh', status:'IN_TRANSIT' },
  { id:'LOAD-702', orderId:'KC-1044', farmerId:'F103', farmerName:'Anil Sawant', cargo:'Alphonso Mango · 100 kg', pickup:'Ratnagiri, Maharashtra', drop:'Kochi, Kerala', days:4, wage:4200, driverId:null, driverName:null, status:'OPEN' },
  { id:'LOAD-703', orderId:'KC-1045', farmerId:'F105', farmerName:'Subhajit Mondal', cargo:'Rice · 800 kg', pickup:'Bardhaman, West Bengal', drop:'Mumbai, Maharashtra', days:5, wage:6800, driverId:null, driverName:null, status:'OPEN' },
];

const seedReviews = [
  { id:'R1', orderId:'KC-1042', buyer:'Aarav Mehta', farmerId:'F101', farmerRating:5, driverId:'D201', driverRating:5, onTime:5, comment:'On time, transparent updates and excellent produce quality.', date:'30 Aug 2026' },
  { id:'R2', orderId:'KC-1037', buyer:'Neha Joshi', farmerId:'F101', farmerRating:5, comment:'Great onion quality and packing.', date:'18 Aug 2026' },
  { id:'R3', orderId:'KC-1029', buyer:'Vikram Shah', farmerId:'F102', farmerRating:4, comment:'Good tomatoes, slightly soft on arrival.', date:'12 Aug 2026' },
];

const seedDisputes = [
  { id:'DSP-301', orderId:'KC-1036', buyer:'Neha Joshi', farmer:'Suresh Patil', category:'QUALITY', amount:15400, status:'RESOLVED', resolution:'PARTIAL_REFUND', note:'8% onions were below agreed Grade A quality.', date:'24 Aug 2026' },
  { id:'DSP-302', orderId:'KC-1041', buyer:'Vikram Shah', farmer:'Meena Jadhav', category:'QUANTITY', amount:9300, status:'OPEN', resolution:null, note:'Buyer reports 18 kg shortfall in delivered quantity.', date:'05 Sep 2026' },
];

export const ENRICHED_LISTINGS = LISTINGS.map((x, i) => ({
  ...x,
  cropImage: x.cropImage || null,
  qualityBasis: x.qualityBasis || {
    maturity: 'Fully mature / market-ready',
    appearance: 'Uniform colour and size',
    damagedPercent: i % 3 === 0 ? '< 2%' : '< 3%',
    moisture: x.cropType === 'Rice' ? '11–13%' : 'Commodity-specific / farmer declared',
    pestDamage: 'None observed',
    foreignMatter: '< 1%'
  },
  gradeDeclaredBy: 'FARMER',
  verificationLevel: x.certifications.some(c => /organic certified|certified organic|certificate verified|fssai|apeda/i.test(c)) ? 'CERTIFICATE_VERIFIED' : 'FARMER_DECLARED',
  certificateName: x.certifications.find(c => /organic certified|certified organic|certificate|fssai|apeda/i.test(c)) || null,
  certificateStatus: x.certifications.some(c => /organic certified|certified organic|certificate verified|fssai|apeda/i.test(c)) ? 'VERIFIED' : null,
  certificateUrl: null
}));

export const INITIAL_STATE = { users: USERS, demand: DEMAND, orders: seedOrders, loads: seedLoads, reviews: seedReviews, disputes: seedDisputes, listings: ENRICHED_LISTINGS };

const API_URL = ''; // Vercel-only showcase: browser localStorage is the persistent demo store.

export async function syncFromBackend(){
  return null;
}

async function syncToBackend(_next){
  return null;
}

export function getState(){
  try { const raw=localStorage.getItem(KEY); return raw ? {...INITIAL_STATE,...JSON.parse(raw)} : INITIAL_STATE; } catch { return INITIAL_STATE; }
}
export function saveState(next){ localStorage.setItem(KEY, JSON.stringify(next)); window.dispatchEvent(new Event('kc-demo-update')); syncToBackend(next); return next; }
export async function resetDemo(){
  localStorage.removeItem(KEY);
  window.location.reload();
}
export function updateState(patch){ return saveState({...getState(),...patch}); }
export function getUser(id){ const s=getState(); return (s.users||USERS).find(u=>String(u.id)===String(id)); }
export function getOrder(id){ return getState().orders.find(o=>String(o.id)===String(id)); }
export function getReviewsForFarmer(id){ return getState().reviews.filter(r=>String(r.farmerId)===String(id)); }
export function getReviewsForDriver(id){ return getState().reviews.filter(r=>String(r.driverId)===String(id)); }
export function rankListings(items){
  return [...items].sort((a,b)=>{
    const score = x => Number(x.farmerRating||0) * Math.log10(Number(x.reviews||0)+10) + (x.verificationLevel==='CERTIFICATE_VERIFIED'?0.35:0);
    return score(b)-score(a);
  });
}

export function roleLabel(role){ return ({FARMER:'Farmer',BUYER:'Buyer',TRUCK_DRIVER:'Truck Driver',ADMIN:'Admin'})[role]||role; }

export function demoLogin(role){
  const ids={FARMER:'F101',BUYER:'B301',TRUCK_DRIVER:'D201'};
  const u=getUser(ids[role]);
  return { token:`demo-${role.toLowerCase()}`, userId:u.id, role:u.role, name:u.name, email:u.email, region:u.region, kycStatus:'VERIFIED' };
}
export const DEMO_ADMIN={token:'demo-admin',userId:'ADMIN',role:'ADMIN',name:'KhetConnect Admin',email:'admin@khetconnect.demo',kycStatus:'VERIFIED'};

export function createOrder(listing,buyerId,quantity){
  const buyer=getUser(buyerId); const order={id:`KC-${Date.now().toString().slice(-5)}`,cropId:listing.id,cropType:listing.cropType,quantity:Number(quantity),pricePerKg:listing.pricePerKg,totalAmount:Number(quantity)*listing.pricePerKg,buyerId,buyerName:buyer.name,farmerId:listing.farmerId,farmerName:listing.farmerName,origin:listing.region,destination:buyer.region,estimatedDays:listing.deliveryDays,transportDays:null,qualityGrade:listing.qualityGrade,qualityBasis:listing.qualityBasis,verificationLevel:listing.verificationLevel,certificateName:listing.certificateName||null,certificateStatus:listing.certificateStatus||null,cropImage:listing.cropImage||null,transportWage:null,escrowStatus:'HELD',workflowStatus:'BUYER_REQUESTED',driverId:null,driverName:null,createdAt:new Date().toISOString().slice(0,10),driverRating:null,farmerRating:null,onTimeRating:null};
  const s=getState(); updateState({orders:[order,...s.orders]}); return order;
}
export function updateOrder(id,patch){const s=getState();const orders=s.orders.map(o=>String(o.id)===String(id)?{...o,...patch}:o);updateState({orders});return orders.find(o=>String(o.id)===String(id));}
export function createLoad(order,days,wage){const load={id:`LOAD-${Date.now().toString().slice(-5)}`,orderId:order.id,farmerId:order.farmerId,farmerName:order.farmerName,cargo:`${order.cropType} · ${order.quantity} kg`,pickup:order.origin,drop:order.destination,days:Number(days),wage:Number(wage),driverId:null,driverName:null,status:'OPEN'};const s=getState();updateState({loads:[load,...s.loads],orders:s.orders.map(o=>o.id===order.id?{...o,workflowStatus:'DRIVER_REQUESTED',transportDays:Number(days),transportWage:Number(wage)}:o)});return load;}
export function updateLoad(id,patch){const s=getState();const loads=s.loads.map(l=>l.id===id?{...l,...patch}:l);updateState({loads});return loads.find(l=>l.id===id);}
export function addReview(review){
  const s=getState();
  if (review.orderId && s.reviews.some(r=>String(r.orderId)===String(review.orderId))) return false;
  const order = review.orderId ? s.orders.find(o=>String(o.id)===String(review.orderId)) : null;
  if (order && order.workflowStatus !== 'COMPLETED') return false;
  const newReview={id:`R-${Date.now()}`,verifiedPurchase:true,date:new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}),...review};
  const users=(s.users||USERS).map(u=>{
    if(String(u.id)!==String(review.farmerId) && String(u.id)!==String(review.driverId)) return u;
    const ratingValue=String(u.id)===String(review.farmerId)?Number(review.farmerRating||0):Number(review.driverRating||0);
    if(!ratingValue) return u;
    const n=Number(u.reviews||0); const nextRating=Number(((Number(u.rating||0)*n+ratingValue)/(n+1)).toFixed(1));
    return {...u,rating:nextRating,reviews:n+1};
  });
  const listings=s.listings.map(l=>String(l.farmerId)===String(review.farmerId)?{...l,farmerRating:users.find(u=>String(u.id)===String(l.farmerId))?.rating||l.farmerRating,reviews:users.find(u=>String(u.id)===String(l.farmerId))?.reviews||l.reviews}:l);
  updateState({users,reviews:[newReview,...s.reviews],listings});
  return true;
}
export function addDispute(dispute){
 const s=getState();
 if(dispute.orderId && s.disputes.some(d=>String(d.orderId)===String(dispute.orderId) && d.status==='OPEN')) return false;
 updateState({disputes:[{id:`DSP-${Date.now().toString().slice(-5)}`,status:'OPEN',date:new Date().toLocaleDateString('en-IN'),...dispute},...s.disputes],orders:s.orders.map(o=>String(o.id)===String(dispute.orderId)?{...o,workflowStatus:'DISPUTED',escrowStatus:'HELD'}:o)});
 return true;
}

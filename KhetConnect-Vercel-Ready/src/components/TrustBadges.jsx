const LABELS = {
  AADHAAR: "Aadhaar Verified",
  KCC: "KCC Verified",
  PM_KISAN: "PM-KISAN Verified",
  LAND_RECORD: "Land Verified",
  FPO_ID: "FPO Member",
  SOIL_HEALTH_CARD: "Soil Health Verified",
  DRIVING_LICENSE: "DL Verified",
  VEHICLE_RC: "RC Verified",
  VEHICLE_INSURANCE: "Insurance Verified",
};

export default function TrustBadges({ badges = [] }) {
  if (!badges.length) return null;
  return (
    <div className="badge-row">
      {badges.map((b) => (
        <span key={b} className="pill pill-verified">✓ {LABELS[b] || b}</span>
      ))}
    </div>
  );
}

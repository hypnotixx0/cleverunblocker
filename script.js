import { useRouter } from "next/router";

export default function DistrictPicker() {
  const router = useRouter();
  const { channel, client_id, district_id } = router.query;

  return (
    <div>
      <h1>OAuth District Picker</h1>
      <p>Channel: {channel}</p>
      <p>Client ID: {client_id}</p>
      <p>District ID: {district_id}</p>
    </div>
  );
}

import Schnellregal from "../Schnellregal";
import Sitebar from "../Sitebar"

export default function SchnellregalPage() {

  const center= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "100px"
  }

  return (
    <div style={center}>
      <Sitebar/>
      <Schnellregal/>
    </div>
  );
}
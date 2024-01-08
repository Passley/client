import SchnellregalDetail from "../SchnellregalDetail";
import Sitebar from "../Sitebar"

export default function SchnellregalDetailPage() {

  const center= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "100px"
  }

  return (
    <div style={center}>
      <Sitebar/>
      <SchnellregalDetail/>
    </div>
  );
}
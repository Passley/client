import MaterialDetail from "../MaterialDetail";
import Sitebar from "../Sitebar"

export default function AusleihenDetail() {

  const center= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "100px"
  }

  return (
    <div style={center}>
      <Sitebar/>
      <MaterialDetail/>
    </div>
  );
}

import Materials from "../Materials";
import Sitebar from "../Sitebar"

export default function AllMaterials() {

  const center= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "100px"
  }

  return (
    <div style={center}>
      <Sitebar/>
      <Materials/>
    </div>
  );
}
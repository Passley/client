import AddMaterial from "../AddMaterial";
import Sitebar from "../Sitebar"

export default function AddPage() {

  const center= {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "100px"
  }

  return (
    <div style={center}>
      <Sitebar/>
      <AddMaterial/>
    </div>
  );
}
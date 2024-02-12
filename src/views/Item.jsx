import { useParams } from "react-router-dom";
import Item from "@/components/Item";

function ItemView() {
  const { id } = useParams();
  return <Item id={Number(id)} level={0} />;
}

export default ItemView;

import { useParams } from "react-router-dom";
import Item from "@/components/Item";

export default function ItemView() {
  const { id } = useParams();
  return <Item id={Number(id)} level={0} />;
}

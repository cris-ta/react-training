import "./styles.css"
import { Heading2, SubHeading } from "../../components/Title"
import Collection from "../../components/Collection"


export default function CollectionPage() {
  return (
    <div className="wrapper__collection">
        <Heading2 heading2="SẢN PHẨM TRONG BỘ SƯU TẬP"/>
        <SubHeading subheading="Những gợi ý trang phục “cực chất” mà Kim Lý đã lựa chọn từ TORANO!"/>
        <Collection/>
    </div>
  )
}
